/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function BlogPostItem(props) {
  const {
    frontMatter,
    metadata,
    color,
    isMobile
  } = props;
  const {
    date,
    permalink,
    readingTime
  } = metadata;
  const {
    author,
    title,
    image,
  } = frontMatter;
  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL = frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image);
  const tempImage = useBaseUrl("img/metaImgBlack.png")


  const BlogHeader = () => {
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <Box className="blogHeaderListPage" style={{width:'100%'}} >
        <Box>
          <h3>{title}</h3>
          <p style={{marginBottom: '10px'}}>
            {month} {day}, {year}{' '}
            {readingTime && <> · {Math.ceil(readingTime)} min read</>}
          </p>
        </Box>
        <Box className="blogAvatarBox">
          <Avatar src={authorImageURL} alt={author} style={{width: '48px', height: '48px'}} />
          <Box className="blogAvatarTextBox">
            <h4 className="blogAuthorTile"><a href={authorURL} target="_blank">{author}</a></h4>
            <h5 className="blogAuthorTile">{authorTitle}</h5>
          </Box>
          <p>
            <a className="blogReadMoreText" href={permalink}>Read more</a>
          </p>
        </Box>
      </Box>
    )
  }

  return (
    <Box style={{backgroundColor: color}} className="blogPostItemBox">
      <Grid container spacing={isMobile? 0 : 4}>
        <Grid item xs={12} md={5}>
          <Box className="centerBox">
            <img src={imageUrl || tempImage} alt="blog post image" className="imgListBlogPost" />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box className="blogCenterHeaderItem">
            <BlogHeader />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogPostItem;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import Layout from '@theme/Layout'
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import { useHistory, useLocation} from 'react-router-dom'
import clsx from "clsx"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Chip from '@material-ui/core/Chip'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,

} from "react-share";
import IconButton from '@material-ui/core/IconButton'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import LanguageIcon from '@material-ui/icons/Language'

import BlogPostPaginator from '@theme/BlogPostPaginator'
import TOC from '@theme/TOC'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function BlogPostPage(props) {
  const {
    content: BlogPostContents,
  } = props;
  const {
    frontMatter,
    metadata
  } = BlogPostContents;
  const {
    title,
    description,
    date,
    readingTime,
    tags,
    nextItem,
    prevItem
  } = metadata;
  const {
    author,
    image,
    metaTitle,
    metaDescription,
    langPost
  } = frontMatter;
  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL = frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image);
  const tempImage = useBaseUrl("img/metaImgBlack.png")
  const history = useHistory()
  const location = useLocation()
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHeroBlog">
            <Box style={{marginBottom: '30px'}}>
              <h1>{title}</h1>
            </Box>
            {langPost && (
              <Box className="blogLanguageAvailableBox">
                <LanguageIcon style={{marginRight: '5px', color: '#0091FF'}}/>
                <p>
                  <a rel="alternate" href={langPost} hrefLang="es-us">Post Available in Spanish</a>
                </p>
              </Box>
            )}
            <BlogHeader />
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobileBlog">
            <Box className="titleBox">
              <h1>{title}</h1>
            </Box>
            {langPost && (
              <Box className="blogLanguageAvailableBox">
                <LanguageIcon style={{marginRight: '5px', color: '#0091FF'}}/>
                <p style={{lineHeight:'25px'}}>
                  <a rel="alternate" href={langPost} hrefLang="es-us">Post Available in Spanish</a>
                </p>
              </Box>
            )}
            <BlogHeader />
          </Box>
        }
      </Box>
    )
  }

  const BlogHeader = () => {
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <Box className="subHeaderBlogBox">
        <p>
          {month} {day}, {year}{' '}
          {readingTime && <> · {Math.ceil(readingTime)} min read</>}
        </p>
        <Box className="blogAvatarBox">
          <Avatar src={authorImageURL} alt={author} style={{width: '48px', height: '48px'}} />
          <Box className="blogAvatarTextBox">
              <a 
                className="blogAuthorTile"
                style={{fontWeight: 'bold', color: 'black'}}
                href={authorURL}
                target="_blank"
              >
                {author}
              </a>
              <h5>{authorTitle}</h5>
           </Box>
        </Box>
      </Box>
    )
  }

  const BlogDivider = () => {
    return(
      <Box className="containerSec">
        <Box className={clsx("sectionNoPadding","dividerBlogBox")}>
          <Grid container>
            <Grid item md={8} xs={12}>
              <p>Tags: </p>
              <Box className="blogTagsBox">
                {tags.map(({label,permalink: tagPermalink }) => 
                  <Chip 
                    style={{marginRight: '5px', marginBottom: '5px', backgroundColor: '#f1f1f1'}}
                    key={tagPermalink}
                    onClick={() => history.push(tagPermalink)}
                    label={label}
                  />
                )}
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box className="blogIconsBox">
                <TwitterShareButton
                  title={`${title} | `}
                  via="EOSCostaRica"
                  hashtags={tags.map(tag => tag.label)}
                  url={`eoscostarica.io${location.pathname}`}
                >
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </TwitterShareButton>
                <LinkedinShareButton
                  title={title}
                  summary={description}
                  url={`eoscostarica.io${location.pathname}`}
                >
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                </LinkedinShareButton>
                <FacebookShareButton
                  quote={title}
                  url={`eoscostarica.io${location.pathname}`}
                >
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </FacebookShareButton>
              </Box>
            </Grid>
          </Grid>
          <Divider />
        </Box>
      </Box>
    )
  }

  const BlogContent = () => {
    return(
      <Box className="containerSec">
        <Box className="section">
          <Box className="blogContentBox">
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Box className="blogMarkdown">
                  <BlogPostContents />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="blogStickyContentBox">
                  {/* <TOC toc={BlogPostContents.toc} /> On review */}
                </Box>
              </Grid>
            </Grid>
          </Box>
          {(nextItem || prevItem) && 
            <Box>
              <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
            </Box>
          }
        </Box>
      </Box>
    )
  }

  return (
    <Layout
      title={metaTitle}
      description={metaDescription}
      image={imageUrl || tempImage}
      wrapperClassName="blog-wrapper"
    >
      {isDesktop && 
        <Box>
          <Parallax strength={800} style={{overflow: 'inherit'}}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <BlogDivider />
            <BlogContent />
          </Parallax>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <BlogDivider />
          <BlogContent />
        </Box>
      }
    </Layout>
  )
}

export default BlogPostPage;
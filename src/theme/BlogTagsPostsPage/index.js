/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Box from '@material-ui/core/Box'
import Layout from '@theme/Layout'
import BlogPostItem from '@theme/BlogPostItem'
import Grid from '@material-ui/core/Grid'

const metaData={
  title:"EOS Costa Rica: Blog Tags",
  description:"",
  img:"img/metaImgBlack.png",
}

const colors = ["rgb(240,240,240,0.5)","rgb(255,255,255,0)"]

function pluralize(count, word) {
  return count > 1 ? `${word}s` : word;
}

function BlogTagsPostPage(props) {
  const {
    metadata,
    items
  } = props;
  const {
    name: tagName,
    count
  } = metadata;

  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory()

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHeroBlog" style={{marginBottom: "10px"}}>
            <Box className="titleBox">
              <h1>
                {count} {pluralize(count, 'post')} tagged with &quot;{tagName}
                &quot;
              </h1>
            </Box>
            <Box className="doubleSpacingBox">
              <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                  <button 
                    className="buttonSecondary" 
                    style={{padding:"19px", height:"90px", width:"100%"}}
                    onClick={() => history.push("/blog/tags")}
                  >
                    View All Tags
                  </button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <button
                    className="buttonSecondary"
                    style={{padding:"19px", height:"90px", width:"100%"}}
                    onClick={() => history.push("/blog/")}
                  >
                    View All Posts
                  </button>
                </Grid> 
              </Grid>
            </Box>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobileBlog" style={{marginBottom: "50px"}}>
            <Box className="titleBox">
              <h1>
                {count} {pluralize(count, 'post')} tagged with &quot;{tagName}
                &quot;
              </h1>
            </Box>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={() => history.push("/blog/tags")}>
                View All Tags
              </button>
            </Box>
          </Box>
        }
      </Box>
    )
  }

  const ListArticles = () => {
    return(
      <Box className="containerSec">
        <Box className="section">
          {items.map(({content: BlogPostContent},index ) => 
            <BlogPostItem 
              key={BlogPostContent.metadata.permalink}
              frontMatter={BlogPostContent.frontMatter}
              metadata={BlogPostContent.metadata}
              truncated={BlogPostContent.metadata.truncated}
              color={colors[index%2]}
              isMobile={isMobile}
            />
          )}
        </Box>
      </Box>
    )
  }

  return(
    <Layout
      title={metaData.title}
      description={metaData.description}
      image={metaData.img}
    >
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <ListArticles />
          </Parallax>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <ListArticles />
        </Box>
      }
    </Layout>
  )
}

export default BlogTagsPostPage;
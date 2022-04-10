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
import Grid from '@material-ui/core/Grid'
import Layout from '@theme/Layout'
import BlogSidebar from '@theme/BlogSidebar'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import clsx from "clsx"

const metaData={
  title:"EOS Costa Rica: Blog Tags",
  description:"",
  img:"img/metaImgBlack.png",
}

function getCategoryOfTag(tag) {
  return tag[0].toUpperCase();
}

function BlogTagsListPage(props) {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory()
  const {
    tags,
    sidebar
  } = props;
  const tagCategories = {};
  Object.keys(tags).forEach(tag => {
    const category = getCategoryOfTag(tag);
    tagCategories[category] = tagCategories[category] || [];
    tagCategories[category].push(tag);
  });

  const tagsList = Object.entries(tagCategories).sort(([a], [b]) => {
    if (a === b) {
      return 0;
    }

    return a > b ? 1 : -1;
  });

  const TagsSection = () => {
    return(
      <Box>
        {tagsList.map(([category, tagsForCategory]) => 
          <Box style={{paddingTop: '15px', paddingBottom: '15px'}}>
            <h3>{category}</h3>
            <Box className="blogChipTagsBox">
              {tagsForCategory.map(tag => 
                <Chip 
                  style={{marginRight: '5px', marginBottom: '5px', backgroundColor: '#f1f1f1'}}
                  key={tags[tag].name}
                  onClick={() => history.push(tags[tag].permalink)}
                  label={`${tags[tag].name} (${tags[tag].count})`}
                />
              )}
              <Divider style={{marginTop: '5px'}}/>
            </Box>
          </Box>
        ).filter(item => item != null)}
      </Box>
    )
  }
    
  const TagsList = () => {
    return(
      <Box className="containerSec">
        <Box className="section">
          <Box className="blogContentBox">
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <TagsSection />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className={clsx("blogStickyContentBox", "blog-wrapper")}> 
                  <BlogSidebar sidebar={sidebar} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHeroBlog" style={{marginBottom: "10px"}}>
            <Box className="titleBox">
              <h1>Tags</h1>
            </Box>
            <Box className="doubleSpacingBox">
              <Grid container spacing={5}>
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
              <h1>Tags</h1>
            </Box>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={() => history.push("/blog/")}>
                View All Posts
              </button>
            </Box>
          </Box>
        }
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
        <Box>
          <Parallax strength={800} style={{overflow: 'inherit'}}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <TagsList />
          </Parallax>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <TagsList />
        </Box>
      }
    </Layout>
  )
}

export default BlogTagsListPage;
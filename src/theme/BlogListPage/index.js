/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import { Parallax, Background } from 'react-parallax'
import clsx from "clsx"
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogSidebar from '@theme/BlogSidebar';

function BlogListPage(props) {
  const {
    metadata,
    items,
    sidebar
  } = props;
  const {
    siteConfig: {
      title: siteTitle
    }
  } = useDocusaurusContext();
  const {
    blogDescription,
    blogTitle,
    permalink
  } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1>Read Our  <br/> Articles</h1>
            </Box>
            <p >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
            <h1>Read Our  <br/> Articles</h1>
            </Box>
            <p >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
          </Box>
        }
      </Box>
    )
  }

  const ListArticles = () => {
    return(
      <Box className="containerSec">
        <Box  className={clsx("section",{["sectionPadding"]: isMobile})}>
          {items.map(({content: BlogPostContent}) => 
            <BlogPostItem key={BlogPostContent.metadata.permalink} frontMatter={BlogPostContent.frontMatter} metadata={BlogPostContent.metadata} truncated={BlogPostContent.metadata.truncated}>
              <BlogPostContent />
            </BlogPostItem>)}
        </Box>
      </Box>
    )
  }

  return(
    <Layout title={title} description={blogDescription} wrapperClassName="blog-wrapper">
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
        </Box>
      }
    </Layout>
  )
}

export default BlogListPage;
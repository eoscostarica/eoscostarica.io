import React from "react"
import PropTypes from 'prop-types'
import Head from '@docusaurus/Head'

const MetaTags = ( {title, description, img, url} ) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={description}/>
      <meta name="description" content={description}/>

      <meta name="og:type" content="website"/>
      <meta name="og:url" content={url}/>
      <meta name="og:title" content={title}/>
      <meta name="og:description" content={description}/>
      <meta name="og:image" content={img}/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={url}/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content={img}/>
    </Head>
  );
};

MetaTags.propTypes = {
  title:PropTypes.string,
  description:PropTypes.string,
  img:PropTypes.string,
  url:PropTypes.string
}

export default MetaTags;

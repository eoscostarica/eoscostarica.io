import React from "react"
import PropTypes from 'prop-types'
import {Helmet} from "react-helmet"
import useBaseUrl from "@docusaurus/useBaseUrl"

const MetaTags = ({title,description,img,url}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="title" content={description}/>
        <meta name="description" content={description}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={useBaseUrl(url)}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={useBaseUrl(img)}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={useBaseUrl(url)}/>
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={description}/>
        <meta property="twitter:image" content={useBaseUrl(img)}/>
    </Helmet>
  );
};

MetaTags.propTypes = {
    title:PropTypes.string,
    description:PropTypes.string,
    img:PropTypes.string,
    url:PropTypes.string
}

export default MetaTags;

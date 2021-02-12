/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function LayoutHead(props) {
  const {
    siteConfig,
  } = useDocusaurusContext();
  const {
    title:siteTitle,
    favicon,
    themeConfig: {
      image: defaultImage,
      metadatas
    },
    url: siteUrl
  } = siteConfig;
  const {
    title,
    description,
    image,
    keywords,
    permalink,
  } = props;
  const metaTitle = title || siteTitle;
  const metaImage = image || defaultImage;
  const metaImageUrl = useBaseUrl(metaImage, {
    absolute: true
  });
  const faviconUrl = useBaseUrl(favicon);
  const htmlLang = "en"
  return <>
      <Head>
        <html lang={htmlLang} />
        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property="og:title" content={metaTitle} />}
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        {description && <meta name="description" content={description} />}
        {description && <meta property="og:description" content={description} />}
        {keywords && keywords.length && <meta name="keywords" content={keywords.join(',')} />}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta name="twitter:image" content={metaImageUrl} />}
        {metaImage && <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Head // it's important to have an additional <Head> element here,
    // as it allows react-helmet to override values set in previous <Head>
    // ie we can override default metadatas such as "twitter:card"
    // In same Head, the same meta would appear twice instead of overriding
    // See react-helmet doc
    >
        {metadatas.map((metadata, i) => <meta key={`metadata_${i}`} {...metadata} />)}
      </Head>
    </>;
}
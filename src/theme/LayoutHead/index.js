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
      <html>
        <head>
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "image": [
                "https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png"
               ],
              "name": "EOS Costa Rica",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "148 W 51st St",
                "addressLocality": "Costa Rica",
                "addressRegion": "NY",
                "postalCode": "10019",
                "addressCountry": "CR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.761293,
                "longitude": -73.982294
              },
              "url": "https://eoscostarica.io/",
              "telephone": "+12122459600",
              "priceRange": "$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday"
                  ],
                  "opens": "11:30",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "11:30",
                  "closes": "23:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "16:00",
                  "closes": "23:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "16:00",
                  "closes": "22:00"
                }
              ]
            }`}
          </script>
        </head>
      </html>
    </>;
}
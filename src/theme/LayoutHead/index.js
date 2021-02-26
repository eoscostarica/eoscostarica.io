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
import { JSONLD, Generic, GenericCollection } from 'react-structured-data'
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
      <JSONLD>
        <Generic
          type="Organization"
          jsonldtype="Organization"
          schema={{
            legalName: "EOS Costa Rica",
            logo: "https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/logos/eoscr-logo.png",
            email: "contact@eosio.cr",
            image: "https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png",
            url: "https://eoscostarica.io/",
            telephone: "+506 2256-3944",
            description: "EOS Costa Rica develops blockchain-based enterprise solutions by deploying the EOSIO protocol to solve real-world problems",
            foundingDate: "22-05-2018"
          }}
        >
          <Generic
            type="address"
            jsonldtype="PostalAddress"
            schema={{
                addressLocality: "San Jose, Costa Rica",
                addressCountry: "CR",
                postalCode: "11801",
                streetAddress: "Real Cariari Autopista General Cañas, Cruce de San Antonio de Belén San José, SJ 40104"
            }}
          />
          <Generic
            type="parentOrganization"
            jsonldtype="Organization"
            schema={{
              name: "SISTEMAS EDENIA INTERNACIONAL S.A.",
              url: "https://www.edenia.com/"
            }}
          />
          <GenericCollection type="founders">
            <Generic
              jsonldtype="Person"
              schema={{
                name: "Edgar Fernández",
                sameAs: "https://www.linkedin.com/in/edgarafernandez/"
              }}
            />
            <Generic
              jsonldtype="Person"
              schema={{
                name: "Xavier Fernández",
                sameAs: "https://www.linkedin.com/in/xaviercr/"
              }}
              />
          </GenericCollection >
          <GenericCollection type="sameAs">
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://www.linkedin.com/company/eoscostarica/mycompany/"
              }}
            />
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ"
              }}
            />
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://twitter.com/EOSCostaRica"
              }}
            />
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://www.facebook.com/costaricaeos"
              }}
            />
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://t.me/eoscr"
              }}
            />
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://github.com/eoscostarica"
              }}
            />
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://eoscostarica.medium.com/"
              }}
            />
            <Generic
              jsonldtype="sameAs"
              schema={{
                url: "https://www.instagram.com/eoscostarica/"
              }}
            />
          </GenericCollection>
        </Generic>
      </JSONLD>
    </>;
}
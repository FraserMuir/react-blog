import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        origins
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

export const SEO = ({ title, description, image, isArticle = true }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const { defaultTitle, titleTemplate, defaultDescription, origins, siteUrl, defaultImage, twitterUsername } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    origins: origins || [],
  };
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      {seo.origins.map((origin) => (
        <link rel="preconnect" href={origin} key={origin} crossorigin></link>
      ))}
      <link
        rel="preload"
        as="style"
        href={`https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Montserrat:ital@0;1&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890%21%C2%A3%24%25%5E%26%2A%28%29%3B%3A%3C%3E%5B%5D%7B%7D%23~%27%40%2F%3F.%2C%3D%2B-_%60%C2%AC`}
      />
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Montserrat:ital@0;1&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890%21%C2%A3%24%25%5E%26%2A%28%29%3B%3A%3C%3E%5B%5D%7B%7D%23~%27%40%2F%3F.%2C%3D%2B-_%60%C2%AC`}
        media="print"
        onload="this.media='all'"
      />
      <noscript>
        {`
        <link
          rel="stylesheet"
          href={\`https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Montserrat:ital@0;1&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890%21%C2%A3%24%25%5E%26%2A%28%29%3B%3A%3C%3E%5B%5D%7B%7D%23~%27%40%2F%3F.%2C%3D%2B-_%60%C2%AC\`}
        />
        `}
      </noscript>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {isArticle && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

import React from 'react';
import { SEO } from './SEO';

export const PageContainer = ({ title, description, image, isArticle, children }) => {
  return (
    <>
      <SEO title={title} description={description} image={image} isArticle={isArticle} />
      {children}
    </>
  );
}
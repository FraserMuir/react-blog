import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { SEO } from './SEO';
import { Header } from './Header';

const GlobalStyle = createGlobalStyle`
  html, body { 
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ title, description, image, isArticle, children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <SEO title={title} description={description} image={image} isArticle={isArticle} />
      <Header />
      {children}
    </StyledLayout>
  );
}

export default Layout;
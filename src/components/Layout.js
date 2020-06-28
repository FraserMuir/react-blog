import React, { useState, useContext, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { SEO } from "./SEO";
import { Header } from "./Header";
import { Transition } from "./Transition";

import "styles/typography.css";

import { fonts } from "styles/fonts";
import { device } from "helpers/breakpoints";

const GlobalStyle = createGlobalStyle`
  body { 
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: ${fonts.sansSerif};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: rgba(0,0,0,0.8);
    overflow: auto scroll;
  }
  pre {
    white-space: pre-wrap;
  }
`;

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 4rem 4vw 6rem;
    @media ${device.mobile} {
      padding: 3rem 4vw 4rem;
    }
  }
`;

const defaultPageContextValue = { title: "", description: "", image: "", isArticle: true };

export const PageContext = React.createContext({ value: {}, setValue: () => {} });

export const usePage = ({ title, description, image, isArticle } = defaultPageContextValue) => {
  const { setValue } = useContext(PageContext);

  // Memoise each props to maintain referencial equality between renders
  const pageData = React.useMemo(() => ({ title, description, image, isArticle }), [title, description, image, isArticle]);

  // Only update the page context value when the data changes
  useEffect(() => {
    setValue(pageData);
  }, [setValue, pageData]);
};

const Layout = ({ children, location }) => {
  const [pageData, setPageData] = useState(defaultPageContextValue);

  return (
    <StyledLayout>
      <PageContext.Provider value={{ value: pageData, setValue: setPageData }}>
        <GlobalStyle />
        <SEO {...pageData} />
        <Header />
        <Transition location={location}>{children}</Transition>
      </PageContext.Provider>
    </StyledLayout>
  );
};

export default Layout;

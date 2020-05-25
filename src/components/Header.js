import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Logo } from "./Logo";

const StyledHeaderPadding = styled.section`
  background: #20232a;
  height: 3rem;
  width: 100%;
  margin-bottom: -1px;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: -1px;
  height: 5rem;
  background: #20232a;
  z-index: 99;
  nav {
    height: 100%;
    width: 100%;
    max-width: 60rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tab-container {
    display: flex;
    align-items: center;
  }

  a {
    color: white;
    transition: color 0.3s;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledTab = styled(Link)`
  padding: 2rem;
  margin-left: 1rem;
`;

const StyledHomeLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  img {
    height: 100%;
    width: auto;
    box-sizing: border-box;
    margin: 1rem;
  }
`;

export const Header = () => {
  return (
    <>
      <StyledHeaderPadding />
      <StyledHeader>
        <nav>
          <StyledHomeLink to="/">
            <Logo />
            Web Tricks
          </StyledHomeLink>
          <div className="tab-container">
            <StyledTab to="/about">About</StyledTab>
          </div>
        </nav>
      </StyledHeader>
    </>
  );
};

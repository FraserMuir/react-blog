import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Logo } from "./Logo";

const StyledHeader = styled.header`
  position: fixed;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  top: 0;
  height: 5rem;
  background: #fff;
  z-index: 99;
  width: 100%;
  contain: layout;

  nav {
    height: 100%;
    width: 100%;
    max-width: 60rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .tab-container {
    display: flex;
    align-items: center;
    a:hover {
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
    <StyledHeader>
      <nav>
        <StyledHomeLink to="/">
          <Logo />
        </StyledHomeLink>
        <div className="tab-container">
          <StyledTab to="/about">About</StyledTab>
        </div>
      </nav>
    </StyledHeader>
  );
};

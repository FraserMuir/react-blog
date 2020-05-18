import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  background: white;
  border-bottom: 1px solid gray;
  width: 100%;
  & > .header-container {
    width: 100%;
    max-width: 80rem;
    margin: auto;
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  margin-left: 1rem;
  color: black;
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: blue;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </div>
    </StyledHeader>
  );
};

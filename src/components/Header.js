import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Logo } from "./Logo";
import { debounce } from "helpers/debounce";

const StyledHeader = styled.header`
  position: fixed;
  box-shadow: ${props => props.scrolled && "0 0 3rem rgba(0, 0, 0, 0.1)"};
  top: 0;
  height: ${props => props.scrolled ? "3.75rem": "5rem"};
  background: ${props => props.scrolled ? "rgba(255, 255, 255, 0.9)" : "white"};
  backdrop-filter: blur(5px);
  transition: box-shadow 0.3s ease, height 0.13s;
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
    padding: 0 1rem;
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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const storeScroll = () => setHasScrolled(window.scrollY > 35);
    document.addEventListener("scroll", debounce(storeScroll), { passive: true });
  }, []);

  return (
    <StyledHeader scrolled={hasScrolled}>
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

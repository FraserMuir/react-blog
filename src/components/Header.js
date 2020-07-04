import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Logo } from "./Logo";
import { debounce } from "helpers/debounce";
import { device } from "helpers/breakpoints";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  contain: layout;

  header {
    z-index: -1;
    position: absolute;
    top: 0;
    box-shadow: ${(props) => props.scrolled && "0 0 3rem rgba(0, 0, 0, 0.1)"};
    transform-origin: 50% 0%;
    transform: ${(props) => props.scrolled && "scaleY(0.8)"};
    background: ${(props) => (props.scrolled ? "rgba(255, 255, 255, 0.9)" : "white")};
    backdrop-filter: blur(5px);
    will-change: box-shadow, transform;
    transition: box-shadow 0.2s ease, transform 0.13s;
    width: 100%;
    contain: layout;
    height: 4.5rem;
    @media ${device.mobile} {
      height: 3.5rem;
    }
  }

  nav {
    height: 4.5rem;
    width: 100%;
    max-width: 60rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    transform: ${(props) => props.scrolled && "translateY(-0.5rem)"};
    will-change: box-shadow, transform;
    transition: transform 0.13s;
    @media ${device.mobile} {
      transform: ${(props) => props.scrolled && "translateY(-0.35rem)"};
      height: 3.5rem;
      padding: 0 0.5rem;
    }
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

  .logo-container {
    transition: transform 0.2s;
    transform-origin: 0% 50%;
    transform: ${(props) => props.scrolled && "scale(0.95)"};
    h1 {
      transition: transform 0.2s;
      transform: ${(props) => props.scrolled && "translateX(-0.35rem)"};
    }
    @media ${device.mobile} {
      transform: ${(props) => props.scrolled && "scale(0.75)"};
      h1 {
        transform: ${(props) => props.scrolled && "translateX(-0.3rem)"};
      }
    }
    .logo {
      transition: transform 0.2s;
      transform-origin: 0% 50%;
      transform: ${(props) => props.scrolled && "scale(0.9)"};
      @media ${device.mobile} {
        transform: ${(props) => props.scrolled && "scale(0.85)"};
      }
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

  useLayoutEffect(() => {
    const storeScroll = () => setHasScrolled(window.scrollY > 35);
    document.addEventListener("scroll", debounce(storeScroll), { passive: true });
    storeScroll();
  }, []);

  return (
    <StyledHeader scrolled={hasScrolled}>
      <header />
      <nav>
        <StyledHomeLink to="/">
          <Logo />
        </StyledHomeLink>
        <div className="tab-container">
          <StyledTab to="/about/">About</StyledTab>
        </div>
      </nav>
    </StyledHeader>
  );
};

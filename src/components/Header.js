import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Logo } from "./Logo";
import { debounce } from "helpers/debounce";
import { device } from "helpers/breakpoints";

const StyledHeader = styled.header`
  position: fixed;
  box-shadow: ${(props) => props.scrolled && "0 0 3rem rgba(0, 0, 0, 0.1)"};
  top: 0;
  height: ${(props) => (props.scrolled ? "3rem" : "4rem")};
  background: ${(props) => (props.scrolled ? "rgba(255, 255, 255, 0.9)" : "white")};
  backdrop-filter: blur(5px);
  transition: box-shadow 0.3s ease, height 0.13s;
  z-index: 99;
  width: 100%;
  contain: layout;
  @media ${device.mobile} {
    height: ${(props) => (props.scrolled ? "2.5rem" : "3rem")};
  }

  nav {
    height: 100%;
    width: 100%;
    max-width: 60rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    @media ${device.mobile} {
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
    transition: all 0.3s;
    transform-origin: 0% 50%;
    transform: ${(props) => props.scrolled && "scale(0.8)"};
    @media ${device.mobile} {
      transform: ${(props) => props.scrolled && "scale(0.7)"};
      h1 {
        margin: ${(props) => props.scrolled ? 0 : "0 0.3rem"};
      }
    }
    .logo {
      transition: all 0.3s;
      transform-origin: 0% 50%;
      transform: ${(props) => props.scrolled && "scale(0.9)"};
      @media ${device.mobile} {
        transform: ${(props) => props.scrolled && "scale(0.8)"};
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

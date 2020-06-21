import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { device, size } from "helpers/breakpoints";
import { fonts } from "helpers/fonts";
import { colors } from "helpers/colors";

const StyledPost = styled(Link)`
  background: white;
  position: relative;
  margin-top: 2rem;
  text-decoration: none;
  @media ${device.tablet} {
    margin-top: 1rem;
  }
  @media ${device.mobile} {
    margin-top: 0.5rem;
  }
  & > .details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    border-radius: 0.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 45%, rgba(0, 0, 0, 0.45) 60%, transparent 80%);
    padding: 0 1.5rem 1.5rem;
    min-height: 30%;
    @media ${device.tablet} {
      padding: 0 1rem 0.5rem;
      min-height: 50%;
    }
    @media ${device.mobile} {
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .title {
      margin: 0;
      color: ${colors.whiteText};
      text-shadow: 2px 2px 0px #000;
      font: 3rem ${fonts.display};
      @media ${device.tablet} {
        font: 2.5rem ${fonts.display};
        margin: -0.3rem;
      }
    }
    .desc {
      color: ${colors.lightWhiteText};
      margin: 0 0.5rem;
      font-size: 1rem;
      @media ${device.tablet} {
        font-size: 0.8rem;
        margin: 0.5rem;
      }
      @media ${device.mobile} {
        display: none;
      }
    }
    .date {
      margin: 0;
      color: ${colors.lightWhiteText};
      text-shadow: 2px 2px 0px #000;
      font: 1.5rem ${fonts.display};
      white-space: nowrap;
      @media ${device.mobile} {
        font: 1rem ${fonts.display};
      }
    }
  }

  & > .picture {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 25px 40px 6px rgba(0, 0, 0, 0.1), 0 18px 25px 3px rgba(0, 0, 0, 0.2), 0 7px 12px 1px rgba(0, 0, 0, 0.1);
  }
`;

const StyledFeaturedLabel = styled.div`
  position: absolute;
  left: -0.5rem;
  top: 1.5rem;
  padding: 0.2rem 0.5em 0.2rem 1rem;
  color: ${colors.whiteText};
  font-family: ${fonts.display};
  font-weight: bold;
  font-size: 1.3rem;
  background: ${colors.blue};
  z-index: 10;
  box-shadow: 3px 3px 0 ${colors.darkBlue};
  border-top-left-radius: 0.2rem;
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    border-left: 0.5rem solid transparent;
    border-top: 0.5rem solid ${colors.darkerBlue};
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    right: -1.2rem;
    bottom: 0;
    border: 1rem solid ${colors.blue};
    border-right-color: transparent;
    filter: drop-shadow(3px 3px ${colors.darkBlue});
  }
  @media ${device.mobile} {
    top: 0.75rem;
    padding: 0.2rem 0.25rem 0.2rem 0.5rem;
    font-size: 1rem;
    &:after {
      right: -1rem;
      border: 0.8rem solid ${colors.blue};
      border-right-color: transparent;
    }
  }
`;

export const FeaturedPost = ({ title, slug, createdAt, description: { description }, heroImage }) => (
  <StyledPost to={`/blog/${slug}`}>
    <Img className="picture" {...heroImage} alt={title} />
    <StyledFeaturedLabel className="featured-label">Featured</StyledFeaturedLabel>
    <div className="details">
      <div className="post-title">
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
      </div>
      <h3 className="date">{createdAt}</h3>
    </div>
  </StyledPost>
);

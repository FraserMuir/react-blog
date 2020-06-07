import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql } from "gatsby";

import { device } from "helpers/breakpoints";

const StyledBlogContainer = styled.div`
  width: 100%;
  max-width: 755px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  & > .picture {
    width: calc(100% + 10rem);
    max-width: 100vw;

    transition: margin 0.3s;
    margin-top: 2rem;
    @media ${device.tablet} {
      margin-top: 0;
    }
  }
  & > article {
    color: rgba(0, 0, 0, 0.84);
    font-family: "Noto Serif";
    line-height: 2.3rem;
    word-spacing: 1px;
    width: 90%;
    font-size: 19px;
    @media ${device.laptop} {
      width: 92.5%;
      font-size: 18px;
    }
    @media ${device.tablet} {
      width: 95%;
      font-size: 17px;
    }
    @media ${device.mobile} {
      line-height: 2rem;
      word-spacing: 0.5px;
      width: 97.5%;
      font-size: 16px;
    }
  }
`;

const BlogPost = ({ data: { contentfulBlogPost: post } }) => {
  const {
    title,
    createdAt,
    heroImage,
    body: {
      childMarkdownRemark: { html: content },
    },
  } = post;

  return (
    <StyledBlogContainer>
      <Img className="picture" {...heroImage} alt={title} />
      <article>
        <h1>{title}</h1>
        <p>{createdAt}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </StyledBlogContainer>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "DD MMM YYYY")
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

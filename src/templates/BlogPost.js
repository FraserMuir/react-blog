import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql } from "gatsby";

const StyledBlogContainer = styled.div`
  width: 100%;
  max-width: 800px;
  & > .picture {
    margin: 3rem -4vw;
    @media (max-width: 800px) {
      margin-top: 0;
    }
  }
`;

const BlogPost = ({ data: { contentfulBlogPost: post } }) => {
  const {
    title,
    createdAt,
    heroImage,
    body: { body: content },
  } = post;

  return (
    <StyledBlogContainer>
      <Img className="picture" {...heroImage} alt={title} />
      <h1>{title}</h1>
      <p>{createdAt}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
        body
      }
    }
  }
`;

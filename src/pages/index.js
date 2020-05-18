import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql } from "gatsby";

const StyledPost = styled.div`
  border: 1px solid gray;
`;

const Home = ({ data }) => {
  const { edges: posts } = data.allContentfulBlogPost;

  return (
    <>
      <h1>Home</h1>
      {posts.map(({ node }) => {
        const { title, slug, createdAt, heroImage } = node;
        return (
          <StyledPost key={slug}>
            <h1>{title}</h1>
            <h1>{slug}</h1>
            <h1>{createdAt}</h1>
            <Img fixed={heroImage.fixed} alt={title} />
          </StyledPost>
        );
      })}
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query Pages {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          createdAt(formatString: "DD MMM YYYY")
          heroImage {
            fixed {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`;

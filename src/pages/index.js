import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql, Link } from "gatsby";

const StyledPost = styled.div`
  border: 1px solid gray;
`;

const Home = ({ data }) => {
  let { edges: posts } = data.allContentfulBlogPost;
  posts = [...posts, ...posts, ...posts, ...posts];
  return (
    <>
      <h1>Home</h1>
      {posts.map(({ node }, i) => {
        const { title, slug, createdAt, heroImage } = node;
        return (
          <StyledPost key={i}>
            <h1>{title}</h1>
            <Link to={`/blog/${slug}`}>{slug}</Link>
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

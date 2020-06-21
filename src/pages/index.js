import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { usePage } from "components/Layout";
import { FeaturedPost } from "components/FeaturedPost";
import { Post } from "components/Post";

const StyledPostsList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 60rem;
`;

const Home = ({ data }) => {
  usePage({ title: "Home", description: "Home Page" });

  const { featured, nonFeatured } = data;

  return (
    <StyledPostsList>
      {featured.edges.map(({ node }) => (
        <FeaturedPost key={node.id} {...node} />
      ))}
      {nonFeatured.edges.map(({ node }) => (
        <Post key={node.id} {...node} />
      ))}
    </StyledPostsList>
  );
};

export default Home;

export const pageQuery = graphql`
  fragment post on ContentfulBlogPost {
    id
    title
    slug
    createdAt(formatString: "DD MMM YYYY")
    heroImage {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    description {
      description
    }
  }

  query Posts {
    featured: allContentfulBlogPost(filter: { featured: { eq: true } }, sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          ...post
        }
      }
    }
    nonFeatured: allContentfulBlogPost(filter: { featured: { eq: false } }, sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;

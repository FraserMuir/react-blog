import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { usePage } from "components/Layout";
import { MainFeaturedPost } from "components/MainFeaturedPost";
import { OtherFeaturedPosts } from "components/OtherFeaturedPosts";
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

  const mainFeature = featured.nodes[0];
  const otherFeatures = featured.nodes.slice(1, 3);

  return (
    <StyledPostsList>
      <MainFeaturedPost {...mainFeature} />
      <OtherFeaturedPosts posts={otherFeatures} />
      {nonFeatured.nodes.map((node) => (
        <Post key={node.id} {...node} />
      ))}
    </StyledPostsList>
  );
};

export default Home;

export const pageQuery = graphql`
  query Posts {
    featured: allContentfulBlogPost(filter: { featured: { eq: true } }, sort: { fields: publishDate, order: DESC }) {
      nodes {
        id
        title
        slug
        createdAt(formatString: "DD MMM YYYY")
        heroImage {
          fluid(maxWidth: 960) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        description {
          description
        }
      }
    }
    nonFeatured: allContentfulBlogPost(filter: { featured: { eq: false } }, sort: { fields: publishDate, order: DESC }) {
      nodes {
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
    }
  }
`;

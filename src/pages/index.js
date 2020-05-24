import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { usePage } from "../components/Layout";

const StyledPostsList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
`;

const StyledPost = styled(Link)`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 5px 12px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  text-decoration: none;

  & > .details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4rem 1.5rem 1.5rem;
    background: linear-gradient(to top, black 10%, rgba(0, 0, 0, 0.8) 45%, rgba(0, 0, 0, 0.65) 60%, transparent);

    & > .desc {
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      font-size: 1.5rem;
      margin-right: 10rem;
      will-change: transform, opacity;
      transition: transform 0.2s, opacity 0.2s;
      opacity: 0;
      transform: translate(0, 4rem);
    }

    & > .post-title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      & > .title {
        color: rgba(255, 255, 255, 0.87);
        margin: 0;
        font-size: 2.5rem;
        will-change: transform, opacity;
        transition: transform 0.2s, opacity 0.2s;
      }
      & > .date {
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
        font-size: 1.5rem;
      }
    }
  }

  &:hover {
    .title {
      transform: translate(0, -2.5rem);
      opacity: 0;
    }
    .desc {
      transform: translate(0, 3rem);
      opacity: 1;
    }
  }

  & > .picture {
    width: 100%;
    height: 100%;
  }
`;

const Home = ({ data }) => {
  usePage({ title: "Home", description: "Home Page" });

  let { edges: posts } = data.allContentfulBlogPost;
  // posts = [...posts, ...posts, ...posts, ...posts];

  return (
    <StyledPostsList>
      {posts.map(({ node }, i) => {
        const {
          title,
          slug,
          createdAt,
          description: { description },
          heroImage,
        } = node;
        return (
          <StyledPost key={i} to={`/blog/${slug}`}>
            <Img className="picture" {...heroImage} alt={title} imgStyle={{ width: "800px", height: "450px" }} />
            <div className="details">
              <p className="desc">{`${description} ${description} ${description} ${description} ${description} ${description}`}</p>
              <div className="post-title">
                <h1 className="title">{title}</h1>
                <h3 className="date">{createdAt}</h3>
              </div>
            </div>
          </StyledPost>
        );
      })}
    </StyledPostsList>
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
  }
`;

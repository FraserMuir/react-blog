import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { usePage } from "components/Layout";
import { device, size } from "helpers/breakpoints";
import { fonts } from "helpers/fonts";

const StyledPostsList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 60rem;
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
    padding: 0 1.5rem 1.5rem;
    background: linear-gradient(to top, black 10%, rgba(0, 0, 0, 0.8) 45%, rgba(0, 0, 0, 0.65) 60%, transparent);
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    will-change: opacity;
    transition: opacity 0.45s;
    opacity: 0.85;
    min-height: 30%;
    @media ${device.laptop} {
      min-height: 20%;
      padding-top: 2rem;
      opacity: 0.9;
    }

    & > .desc {
      display: flex;
      @media ${device.laptop} {
        display: none;
      }
      align-items: flex-end;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      min-height: 8rem;
      max-height: 12rem;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.2rem;
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
        margin: 0;
        color: rgba(255, 255, 255, 0.85);
        font-size: 3rem;
        font-family: ${fonts.display};
        @media ${device.laptop} {
          font-size: 2.5rem;
        }
        @media ${device.tablet} {
          font-size: 2.25rem;
        }
        will-change: transform, opacity;
        transition: transform 0.2s, opacity 0.2s;
      }
      & > .date {
        font-family: ${fonts.display};
        margin: 0;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.5rem;
        @media ${device.laptop} {
          font-size: 1.3rem;
        }
        @media ${device.tablet} {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: ${size.laptop}) {
    &:hover {
      .details {
        padding-top: 4rem;
        opacity: 1;
      }
      .title {
        transform: translate(0, -2.5rem);
        opacity: 0;
      }
      .desc {
        transform: translate(0, 3rem);
        opacity: 1;
      }
    }
  }

  & > .picture {
    width: 100%;
    height: 100%;
  }
`;

const Home = ({ data }) => {
  usePage({ title: "Home", description: "Home Page" });

  const { edges: posts } = data.allContentfulBlogPost;

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
            <Img className="picture" {...heroImage} alt={title} />
            <div className="details">
              <p className="desc">{description}</p>
              <div className="post-title">
                <h2 className="title">{title}</h2>
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

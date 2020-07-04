import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledPost = styled(Link)`
  display: flex;
  position: relative;
  margin-top: 2rem;
  text-decoration: none;
  height: 15rem;

  & > .picture {
    width: 100%;
    max-width: 30%;
  }
`;

export const Post = ({ title, slug, createdAt, description: { description }, heroImage }) => (
  <StyledPost to={`/blog/${slug}/`}>
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

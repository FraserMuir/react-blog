import React from "react";
import styled from "styled-components";
import { colors } from "helpers/colors";

const StyledContainer = styled.div`
  h3 {
    color: ${colors.darkBlue};
  }
  .posts-container {
    display: flex;
  }
`;

const StyledPost = styled.div`
  border: 1px solid red;
`;

const Post = ({ title, slug, createdAt, description: { description }, heroImage }) => (
  <StyledPost>
    <h3>{title}</h3>
  </StyledPost>
)

export const OtherFeaturedPosts = ({ posts }) => (
  <StyledContainer>
    <h3>More Featured</h3>
    <div className="posts-container">
      {posts.map((post, i) => (
        <>
          {i > 0 && <hr />}
          <Post key={post.id} {...post} />
        </>
      ))}
    </div>
  </StyledContainer>
)
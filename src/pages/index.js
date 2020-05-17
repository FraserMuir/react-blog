import React from "react";
import { PageContainer } from "../components/PageContainer";

const HomePage = () => {
  return (
    <PageContainer title="Home" isArticle={false}>
      <h1>My blog</h1>
    </PageContainer>
  );
};

export default HomePage;

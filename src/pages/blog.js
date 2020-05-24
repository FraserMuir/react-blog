import React from "react";
import { usePage } from "../components/Layout";

const Blog = () => {
  usePage({ title: "Blog", description: "The Main Blog" });

  return <h1>Blog</h1>;
};

export default Blog;

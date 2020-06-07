import React from "react";
import { usePage } from "components/Layout";

const PageNotFound = () => {
  usePage({ title: "404", description: "Page Not Found" });

  return <h1>Page not found</h1>;
};

export default PageNotFound;

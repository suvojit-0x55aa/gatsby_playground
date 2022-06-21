import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const aboutPage = () => {
  return (
    <div>
      <Layout pageTitle="About">
        <p> This is an about me page that is about me.</p>
      </Layout>
    </div>
  );
};

export default aboutPage;

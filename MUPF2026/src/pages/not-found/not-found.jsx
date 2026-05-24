import React from 'react';
import BaseComponent from '../../BaseComponent/BaseComponent';
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="page-not-found">

      <Helmet>
        <title>Not Found | Dev.Pranav</title>
        <meta name="description" content="Not Found | Dev.Pranav" />
        <meta name="keywords" content="Not Found | Dev.Pranav" />
        <meta name="author" content="Dev.Pranav" />
      </Helmet>
      <BaseComponent>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </BaseComponent>
    </div>
  );
};

export default NotFound;

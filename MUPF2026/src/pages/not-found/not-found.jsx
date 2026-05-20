import React from 'react';
import BaseComponent from '../../BaseComponent/BaseComponent';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <BaseComponent>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </BaseComponent>
    </div>
  );
};

export default NotFound;

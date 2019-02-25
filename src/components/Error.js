import React from 'react';
import { Link } from '@reach/router';

const Error = ({ error }) => {
  return (
    <div className="errorBox">
      <h1>Oops!</h1>
      {error ? (
        <p>
          Error: {error.response.status} {error.response.statusText}
        </p>
      ) : (
        <h2>404</h2>
      )}
      <button className="toHome">
        <Link className="homeLink" to="/">
          Go home
        </Link>
      </button>
    </div>
  );
};

export default Error;

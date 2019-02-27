import React from 'react';
import { Link } from '@reach/router';
const NoMatch = () => {
  return (
    <div>
      <p>Sorry, page not found</p>

      <button className="toHome">
        <Link className="homeLink" to="/">
          Go home
        </Link>
      </button>
    </div>
  );
};

export default NoMatch;

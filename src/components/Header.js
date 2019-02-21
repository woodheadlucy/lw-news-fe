import React from 'react';
import '../App.css';
import './Header.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header">
      <Link className="head" to="/">
        {' '}
        <h1>LW NEWZ</h1>{' '}
      </Link>
    </div>
  );
};

export default Header;

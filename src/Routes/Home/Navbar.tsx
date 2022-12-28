import React, { ReactElement } from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { featureRoutesList } from '../../App.routes';
import { APP_NAME } from '../../constants/App.constants';

import './Navbar.css';

export function Navbar(): ReactElement {
  const { pathname } = useLocation();
  return (
    <nav className="nav">
      <div className="app-title">
        <Link to={''}>{APP_NAME}</Link>
      </div>
      <ul>
        {featureRoutesList.map((route, index) => (
          <li key={String(index) + route.name} className={route.path === pathname ? 'active' : ''}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Navbar.propTypes = {};

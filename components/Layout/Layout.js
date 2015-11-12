/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import AppBarAndLeftNav from '../NavigationTest/AppBarAndLeftNav';

function Layout({ children }) {
  return (
    <div className="Layout" style={{"marginLeft": "8", "marginRight":"8", "marginBottom":"8"}}>
       <AppBarAndLeftNav />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import { Provider } from 'react-redux';
import configureStore from '../Redux/Store/configureStore';
import DevTools from '../Redux/DevTools';

const store = configureStore();

function Layout({ children }) {
  return (
  	<Provider store={store}>
	    <div style={{"minWidth":"1300px"}} className="Layout">
	      <Navigation />
	      <div style={{"marginLeft": "60", "marginRight":"60"}}>
            {children}
        </div>
	      <DevTools />
	    </div>
    </Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
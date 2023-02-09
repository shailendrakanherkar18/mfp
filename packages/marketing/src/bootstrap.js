import React from 'react';
import ReactDom from 'react-dom';

import App from './App'

// mount function to start up the application
const mount = (el) => {
    ReactDom.render(
        <App />, 
        el
    )
}

// if we are in development and in isolation
// call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot) {
        mount(devRoot)
    }

}

export { mount };

// we are ruuning through container
// and we should export the mount function
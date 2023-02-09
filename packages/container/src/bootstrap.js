import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

console.log('bootstrap container');

ReactDom.render(
    <App />, document.querySelector('#root')
)
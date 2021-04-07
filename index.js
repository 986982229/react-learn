// import _ from 'lodash';

// document.getElementById('root').innerHTML = 'Webpack Hello World';

// const a = '';
// console.log('-======1====', _.isEmpty(a));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function aa() {
//   return 'test babel';
// }

// document.getElementById('root').innerHTML = aa();

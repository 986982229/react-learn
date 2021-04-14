import React from 'react';
import './index.css';
import AA from './111.jpeg';
import A from './11.jpg';

export default () => {
  console.log('React Hello World');
  return (
    <div>
      <span id={'spanId'}>React Hello 666</span>
      <img src={A} />
    </div>
  );
};

// export default class A extends React.Component {
//   render() {
//     return (
//       <div>
//         <span>React Hello World</span>
//       </div>
//     );
//   }
// }

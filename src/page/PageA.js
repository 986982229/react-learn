import React, { Component, useEffect, useState } from 'react';
import './PageA.css';
import { useHistory, generatePath, Prompt } from 'react-router-dom';

export default function PageA() {
  const [count, setCount] = useState(0);
  let [isBlocking, setIsBlocking] = useState(false);

  const history = useHistory();

  useEffect(() => {
    ab();
  }, [count]);

  useEffect(() => {
    console.log('history: ', history);
  }, []);

  const ab = () => {
    setTimeout(() => {
      const newCount = count + 1;
      setCount(newCount);
    }, 1000);
  };

  console.log('isBlocking: ', isBlocking);
  return (
    <div>
      <span id="pageASpan">{count}</span>
      <div>
        <button
          onClick={() => {
            // history.push('/pageB', { aa: 'aa', bb: 'bb' });
            // generatePath 用法
            // const a = generatePath('/pageB/:id', {
            //   id: 11,
            // });
            // console.log('a: ', a);
            // history.push(a);
            // promote
            // const a = new Prompt('bbb', true);
            // console.log('a: ', a);
            setIsBlocking(true);
          }}
        >
          Jump to B
        </button>
        <div class="A">
          <button theme={'dark'}>sssss</button>
        </div>
        <Prompt message={(location) => `Are you sure you want to go to ${location.pathname}`} when={isBlocking} />
      </div>
    </div>
  );
}

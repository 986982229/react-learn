import React, { Component, useEffect, useState } from 'react';
import './PageA.css';
import { useHistory } from 'react-router-dom';

export default function PageB() {
  const history = useHistory();

  useEffect(() => {
    console.log('history: ', history);
    console.log('param: ', history.location.state);
  }, []);

  return (
    <div>
      <span id="pageASpan">This is B page ee</span>
      <div>
        <button
          onClick={() => {
            history.push('/pageC', { cc: 'cc' });
          }}
        >
          Jump to C
        </button>
      </div>
    </div>
  );
}

import React, { Component, useEffect, useState } from 'react';
import './PageA.css';
import { useHistory } from 'react-router-dom';

export default function PageC() {
  const history = useHistory();

  useEffect(() => {
    console.log('This is C page');
    console.log('history: ', history);
    console.log('param: ', history.location.state);
  }, []);

  

  return (
    <div>
      <span id="pageASpan">This is C page</span>
      <div>
        <button
          onClick={() => {
            history.push('/pageB/pageD');
          }}
        >
          Jump to D page
        </button>
      </div>
    </div>
  );
}

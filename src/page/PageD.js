import React, { Component, useEffect, useState } from 'react';
import './PageA.css';
import { useHistory } from 'react-router-dom';

export default function PageD() {
  const history = useHistory();

  useEffect(() => {
    console.log('This is D page');
    console.log('history: ', history);
    console.log('param: ', history.location.state);
  }, []);

  return (
    <div>
      <span id="pageASpan">This is D page</span>
    </div>
  );
}

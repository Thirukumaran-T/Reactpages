import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import One from './components/one';
import Two from './components/two';
import Three from './components/three';

function Main() {
  switch (window.location.pathname) {
    case '/One':
      return <One />;
    case '/Two':
      return <Two />;
    case '/Three':
      return <Three />;
    default:
      return <App />;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

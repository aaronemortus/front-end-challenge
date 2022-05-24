import React, { Component } from 'react';
import { render } from 'react-dom';
import Game from './components/Game';

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className='display-3 text-center fw-bold'>Jüsto - Front-end Challenge</h1>
        <Game />
      </>
    );
  }
}

const appDiv = document.getElementById('app');

render(<App />, appDiv);

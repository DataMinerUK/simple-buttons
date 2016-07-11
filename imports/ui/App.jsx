import React, { Component } from 'react';

import Click from './Button.jsx'

export default class App extends Component {
  getButtons() {
    return [
      { id: 1, color: 'red'},
      { id: 2, color: 'green'},
      { id: 3, color: 'blue'},
    ];
  }
  renderButtons() {
    return this.getButtons().map((click) => (
      <Click key={click.id} click={click} />
    ));
  }
  render() {
    return (
      <ul className="buttons">
        {this.renderButtons()}
      </ul>
    );
  }
}

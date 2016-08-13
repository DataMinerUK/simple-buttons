import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const Wims = new Mongo.Collection('wims');

import Photon from './Button.jsx'

export default class App extends Component {
  renderButtons() {
    return this.props.wims.map((wim) => (
      <Photon key={wim.id} wim={wim} />
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

App.propTypes = {
  wims: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    wims: Wims.find().fetch(),
  };
}, App);

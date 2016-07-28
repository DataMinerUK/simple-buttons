import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import Particle from 'particle-api-js';
import { Meteor } from 'meteor/meteor';

export default class Photon extends Component {

  lightParticle(){
    Meteor.call("lightParticle", "*********", function(error, result) {
      console.log(result);
    });
  }

  render() {
    return (
      <li>
        <button className={this.props.wim.product_id}  onClick={this.lightParticle} >
        {this.props.wim.name.toUpperCase()}
        </button>
      </li>
    );
  }
}

Photon.propTypes = {
  wim: PropTypes.object.isRequired,
};

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import Particle from 'particle-api-js';
import { Meteor } from 'meteor/meteor';

export default class Photon extends Component {

  flashParticle(){
    console.log(this.props.wim.id);
    Meteor.call("startRainbows", this.props.wim.id, function(error, result) {
      console.log("starting rainbows");
    });
    setTimeout(() =>
      Meteor.call("stopRainbows", this.props.wim.id, function(error, result) {
        console.log("stop rainbows");
      })
    ,5000);
  }

  render() {
    return (
      <li>
        <button className={this.props.wim.product_id}  onClick={this.flashParticle.bind(this)} >
        {this.props.wim.name.toUpperCase()}
        </button>
      </li>
    );
  }
}

Photon.propTypes = {
  wim: PropTypes.object.isRequired,
};

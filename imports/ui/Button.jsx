import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import Particle from 'particle-api-js';
import { Meteor } from 'meteor/meteor';

export default class Click extends Component {

  lightParticle(){
    Meteor.call("lightParticle", "************", function(error, result) {
      console.log(result);
    });
  }

  render() {
    return (
      <li>
        <button className={this.props.click.color}  onClick={this.lightParticle} >
        {this.props.click.color.toUpperCase()}
        </button>
      </li>
    );
  }
}

Click.propTypes = {
  click: PropTypes.object.isRequired,
};

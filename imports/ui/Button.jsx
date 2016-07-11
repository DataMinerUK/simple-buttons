import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'

export default class Click extends Component {
  changeBackground(){
    document.body.style.backgroundColor = this.props.click.color;
  }

  render() {
    return (
      <li>
        <button className={this.props.click.color}  onClick={this.changeBackground.bind(this)} >
        {this.props.click.color.toUpperCase()}
        </button>
      </li>
    );
  }
}

Click.propTypes = {
  click: PropTypes.object.isRequired,
};

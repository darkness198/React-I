import React, { Component } from 'react';

class MyListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isComplete: false
    };
  }
  handleClick() {
    this.props.onDelete(this.props.value);
  }
  toggle() {
    if(!this.state.isComplete) {
      document.getElementById(`${this.props.myKey}item`).style.color = 'red';
      this.setState({
        isComplete: true
      });
    }
    else {
      document.getElementById(`${this.props.myKey}item`).style.color = 'black';
      this.setState({
        isComplete: false
      });
    }
  }
  render() {
    return (
      <div>
        <span className="items" onClick= {this.toggle} id={(this.props.myKey + 'item')}>{this.props.value}</span>
        <span className="clickers" onClick={this.handleClick}> x </span>
      </div>
    );
  }
  

}
export default MyListItem;
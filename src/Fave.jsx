import React, { Component } from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

export default class Fave extends Component {
  // if use constructor, cannot use arrow function below in handleClick
  // constructor(props) {
  //   super(props);
  //   this.state = { isFave: false };
  //   this.handleClick.bind(this);
  // }

  // state = {
  //   isFave: false,
  // }
  
  handleClick = (e) => {
    console.log("Handling Fave click!");
    e.stopPropagation();
    // this.setState(prevState => ({ isFave: !prevState.isFave }));
    this.props.onFaveToggle();
  }
  
  render() {
    const isFave = (this.props.isFave) ? 'remove_from_queue' : "add_to_queue"
    return (
      <div className={"film-row-fave " + isFave} onClick={this.handleClick} >
        {/* <AddToQueueIcon /> */}
        {(this.props.isFave) ? <RemoveFromQueueIcon /> : <AddToQueueIcon />}
      </div>
    )
  }
}
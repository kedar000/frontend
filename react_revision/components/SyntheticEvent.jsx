import React from 'react';

class SyntheticEvent extends React.Component {
  handleClick = (event) => {
    // Access properties from the synthetic event
    console.log('Button clicked');
    console.log('Event type:', event.type);
    console.log('Mouse coordinates:', event.clientX, event.clientY);


    console.log(event)
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}

export default SyntheticEvent;
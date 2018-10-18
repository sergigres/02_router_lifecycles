import React, { Component } from 'react';

class Conditional extends Component {

  render() {
    const value = true;

    const returnValue = () => {
      return false;
    }

    const showIt = () => {
      return (!returnValue() ? <h3>Yeah, thats true</h3> : <h3>Oh no!</h3>)
    }

    return(
      <div>
        { showIt() }

      </div>

    );
  }

}

export default Conditional;

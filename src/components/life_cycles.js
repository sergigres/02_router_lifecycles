import React, { Component } from 'react';

class Life extends Component {
  // 1 get default props


  // 2 set default state
  state = {
    title: 'Life cycles'
  }

  // 3 before render
  componentWillMount() {
    console.log('3. Before render');
  }

componentWillUpdate() {
  console.log('BEFORE UPDATE');
}

componentDidUpdate() {
  console.log('AFTER UPDATE');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log(nextState);
  return true;
}

// Calling the component FROM the component
componentWillReceiveProps() {
  console.log('BEFORE RECEIVE PROPS');
}

componentWillUnmount() {
  console.log('UNMOUNT')
}

  // 4 render jsx
  render() {
    console.log('4. Rendering');
    console.log(this.props);
    return(
      <div>
        <h3>{this.state.title}</h3>
      <div onClick={
        () => this.setState({title: 'something else'})
      }>CLICK TO CHANGE</div>
      </div>

    );
  }

  // 5 after jsx render
  componentDidMount() {
    console.log('5. After render');
  }
}

export default Life;

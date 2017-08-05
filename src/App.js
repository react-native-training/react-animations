import React, { Component } from 'react';

import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

console.log('Animated:', Animated)

class App extends Component {
  animatedValue = new Animated.Value(0)
  animate = () => {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(1)
      }
    ).start();
  }
  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-120, 0],
    })
    return (
      <div className="App">
        <div className="container">
          <div style={styles.button} onClick={this.animate}>Animate</div>
          <Animated.div
            style={
              Object.assign(
                {},
                styles.box,
                { opacity: this.animatedValue, marginLeft })}>
                <p>Thanks for your submission!</p>
            </Animated.div>
            </div>
      </div>
    );
  }
}

const styles = {
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc107',
    cursor: 'pointer',
    marginBottom: 20,
    width: 180,
    height: 40,
    border: 'none',
    outline: 'none',
  },
  box: {
    opacity: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 400,
    borderRadius: 10,
    boxShadow: '1px 1px 13px rgba(0, 0, 0, .35)',
  }
}

export default App;

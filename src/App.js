import React, { Component } from 'react';

import { TweenMax, TimelineLite } from 'gsap';

class App extends Component {
  animate = () => {
    var animation = new TimelineLite()
    animation
      .to(this.box, 1, { x: 200 })
      .to(this.box, 1, { y: 200 })
      .to(this.box, 1, { x: 0 })
      .to(this.box, 1, { y: 0 })
  }
  render() {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.animate}>Animate</button>
        <div style={styles.box} ref={box => this.box = box} className="box" />
      </div>
    )
  }
}

const styles = {
  button: {
    width: 200,
    height: 45,
    border: 'none',
    outline: 'none',
  },
  container: {
    padding: 100,
  },
  box: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: '#ffc107',
    borderRadius: 4,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  }
}

export default App;

import React, { Component } from 'react';

import {Motion, spring} from 'react-motion';

class App extends Component {
  state = {
    height: 38
  }
  animate = () => {
    this.setState((state) => ({ height: state.height === 233 ? 38 : 233 }))
  }
  render() {
    console.log('render called...')
    return (
      <div className="App">
        <div className="container">
        <div style={styles.button} onClick={this.animate}>Animate</div>
        <Motion style={{ height: spring(this.state.height) }}>
          {
            ({ height }) => <div style={Object.assign({}, styles.menu, { height } )}>
              <p style={styles.selection}>Selection 1</p>
              <p style={styles.selection}>Selection 2</p>
              <p style={styles.selection}>Selection 3</p>
              <p style={styles.selection}>Selection 4</p>
              <p style={styles.selection}>Selection 5</p>
              <p style={styles.selection}>Selection 6</p>
            </div>
          }
        </Motion>
        </div>
      </div>
    );
  }
}

const styles = {
  menu: {
    overflow: 'hidden',
    border: '2px solid #ddd',
    width: 300,
    marginTop: 20,
  },
  selection: {
    padding: 10,
    margin: 0,
    borderBottom: '1px solid #ededed'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: 200,
    height: 45,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#ffc107',
  },
}

export default App;

import React, { Component } from 'react';

class App extends Component {
  state = {
    disabled: true,
  }
  onChange = (e) => {
    const length = e.target.value.length;
    if (length >= 4) {
      this.setState(() => ({ disabled: false }))
    } else if (!this.state.disabled) {
      this.setState(() => ({ disabled: true }))
    }
  }
  render() {
    const label = this.state.disabled ? 'Disabled' : 'Submit';
    return (
      <div className="App">
        <div style={styles.container}>
          <button
            style={Object.assign({}, styles.button, !this.state.disabled && styles.buttonEnabled)}
            disabled={this.state.disabled}
          >{label}</button>
          <input
            style={styles.input}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 500,
    padding: 50,
    boxShadow: '1px 1px 14px rgba(0, 0, 0, .4)',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: 200,
    outline: 'none',
    fontSize: 20,
    padding: 10,
    border: 'none',
    backgroundColor: '#ddd',
    marginTop: 10,
  },
  button: {
    width: 180,
    height: 50,
    border: 'none',
    borderRadius: 4,
    fontSize: 20,
    cursor: 'pointer',
    transition: '.25s all',
  },
  buttonEnabled: {
    backgroundColor: '#ffc107',
    width: 220,
  }
}

export default App;

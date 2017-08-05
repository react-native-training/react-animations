import React, { Component } from 'react';

class App extends Component {
  state = {
    focused: false
  }
  componentDidMount() {
    this.input.addEventListener('focus', this.focus);
    this.input.addEventListener('blur', this.focus);
  }
  focus = () => {
    this.setState((state) => ({ focused: !state.focused }))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <input
            ref={input => this.input = input}
            className={['input', this.state.focused && 'input-focused'].join(' ')}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = { password: '', clicked: false, validated: false };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  // 순서2,
  input = React.createRef();

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    // 순서3,
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          // 방법1,
          // 순서1,
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>확인</button>
      </div>
    );
  }
}

export default ValidationSample;

import { Component } from 'react';
import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ch05, dom에 ref 달기</h1>
        <h2>연습1, 간단한 유효성 체크 확인.</h2>
        <ValidationSample></ValidationSample>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Counter extends Component {
  // 상태(state) 초기값 설정
  state = { number: 0, fixedNumber: 0 };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>상태에 따라 변경되는 number : {number}</h1>
        <h2>변경되지 않는 값 fixedNumber : {fixedNumber}</h2>
        
        {/* +1 버튼 */}
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>

        {/* -1 버튼 추가 */}
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
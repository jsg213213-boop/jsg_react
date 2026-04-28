import { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  // 생명주기 시작, 마운트 1번
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  // 생명주기 , 마운트 2번, 업데이트시에도 호출 1번
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 생명주기 , 마운트 4번
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 생명주기 , 업데이트  2번
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  // 언마운트 , 컴포넌트가 제거 되기 직전에 호출.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 생명주기 , 업데이트  4번
  getSnapshotBeforeUpdate(prevProps) {
    console.log('getSnapshotBeforeUpdate');
    console.log(`업데이트 직전 색상: ${this.myRef.style.color}`);
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 생명주기 , 업데이트  5번
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상:', snapshot);
    }
  }

  // 생명주기 , 마운트 3번, 업데이트 3번
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* 에러를 발생시키는 부분을 주석 처리 또는 수정 */}
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;

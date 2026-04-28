import  { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  // Math.random() , 0 ~ 16777215 사이의 랜덤한 값을 호출
  // toString(16), 16진법 표기, 0,1,~f
  // padStart(6, '0') ,6자리로 표기하고, 값이 작거나 앞에 표기를 0으로 채우기.
  // #000000 ~ #ffffff
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        {/* 예외 설정 컴포넌트를 감싸서 적용하기. */}
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import ValidationSample from './ValidationSample';
import JoinForm from '../ch04/JoinForm';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ch05, dom에 ref 달기</h1>
        <h2>연습1, 간단한 유효성 체크 확인.</h2>
        <ValidationSample></ValidationSample>
        <h2>연습2, 앞시간에 회원가입폼에서, 특정 입력창에 포커스 주기 복습</h2>
        <JoinForm></JoinForm>
        <h2>연습3, 스크롤에 ref 달기, 제어 연습</h2>
        {/* 순서3, 부모 컴포넌트에서, 자식 컴포넌트 ref로 전달하기. */}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        {/* 버튼 클릭시, 순서3으로 이동  */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위으로</button>
        <button onClick={() => this.scrollBox.scrollToMiddle()}>
          가운데로
        </button>
      </div>
    );
  }
}

export default App;

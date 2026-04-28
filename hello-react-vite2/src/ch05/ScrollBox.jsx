import { Component } from 'react';


class ScrollBox extends Component {
  // 화면에, 수치로 각 값을 표기
  // 1. 수치를 저장할 state 선언
  state = {
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
  };

  // 컴포넌트가 처음 화면에 나타날 때 초기 높이값 세팅
  // 리액트에서, 클래스형 컴포넌트에서, 생명주기, 9단계 있음.
  componentDidMount() {
    if (this.box) {
      this.setState({
        scrollHeight: this.box.scrollHeight,
        clientHeight: this.box.clientHeight,
      });
    }
  }

  // 2. 스크롤이 발생할 때마다 state 업데이트하는 함수
  handleScroll = () => {
    if (this.box) {
      this.setState({
        scrollTop: this.box.scrollTop,
        scrollHeight: this.box.scrollHeight,
        clientHeight: this.box.clientHeight,
      });
    }
  };
  // 화면에, 수치로 각 값을 표기

  // 순서2
  // 맨밑으로 이동하는 함수.
  scrollToBottom = () => {
    /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           scrollHeight : 650px
           clientHeight : 300px
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  //scrollToTop , 으로 함수를 생성해서, 맨위로 올라가는 버튼을 만들어서 적용해보기.
  scrollToTop = () => {
    this.box.scrollTop = 0;
  };
  //scrollToMiddle , 으로 함수를 생성해서, 가운데로 이동는 버튼을 만들어서 적용해보기.
  scrollToMiddle = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = (scrollHeight - clientHeight) / 2;
  };

  render() {
    // 화면에, 수치로 각 값을 표기, 현재 스크롤 수치를 화면에 표시
    const { scrollTop, scrollHeight, clientHeight } = this.state;

    return (
      <div>
        {/* 3. 현재 스크롤 수치를 화면에 표시 */}
        <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          <p>scrollHeight (전체 높이): {scrollHeight}px</p>
          <p>clientHeight (보이는 박스 높이): {clientHeight}px</p>
          <p style={{ color: 'blue' }}>
            scrollTop (현재 스크롤 위치): {Math.round(scrollTop)}px
          </p>
        </div>
        {/* 3. 현재 스크롤 수치를 화면에 표시 */}
        <div
          style={{
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
          }}
          // 순서1
          ref={(ref) => {
            this.box = ref;
          }}
          // 4. 스크롤 이벤트 연결, 현재 스크롤 수치를 화면에 표시
          onScroll={this.handleScroll}
        >
          <div
            style={{
              height: '650px',
              background: 'linear-gradient(white, black)',
            }}
          />
        </div>
      </div>
    );
  }
}

export default ScrollBox;

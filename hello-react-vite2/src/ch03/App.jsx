import MyComponent from './MyComponent';
import JsgComponent from './jsgComponent';
import Counter from './Counter';
import Say from './Say';
const App = () => {
  return (
    <div>
      <h1>우리가 ch03에서 만든 App.js 파일</h1>
      <MyComponent name="정성규">children 매개변수 전달 테스트 </MyComponent>
      <h2>본인소개 컴포넌트 출력하기</h2>
      <JsgComponent name="기본이름" favoriteTVShow="런닝맨">children 매개변수 전달 테스트 </JsgComponent>
      <h3>클래스형 컴포넌트이고, setState 함수를 이용해서, 상태에 따라
        업데이트(다시그리기)</h3>
      <Counter></Counter>
      {/* Say 컴포넌트 추가 */}
      <hr /> {/* 구분선 (선택사항) */}
      <Say /> 
      <hr />
    </div>
  );
};

export default App;

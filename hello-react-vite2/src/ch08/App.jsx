import { useState } from 'react';
import Counter from "./Counter";
import Info from "./Info";
import Counter2 from "./Counter2";
import InfoForm from "./InfoForm";
import MountLog from "./MountLog";
import AutoTimer from "./AutoTimer";
import CounterReducer from "./CounterReducer";
import AdvancedCounter from "./AdvancedCounter";
import Todo from "./Todo";
import GetAverage from "./GetAverage";
import MaxCompare from "./Maxcare";

const App = () => {
    const [isShowing, setIsShowing] = useState(true);

    return (
        <div>
            <h1>ch08 연습용</h1>
            <h2>Counter</h2>
            <Counter></Counter>
            <h3>Info</h3>
            <Info></Info> 
            <h3>Counter2</h3>
            <Counter2></Counter2>
            <h3>InfoForm</h3>
            <InfoForm></InfoForm>
            <h3>MountLog</h3>
            <MountLog></MountLog>
            <h3>AutoTimer</h3>
            <AutoTimer></AutoTimer>
            <h3>AutoTimer언마운트 테스트 </h3>
          <button onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? '타이머 컴포넌트 숨기기' : '타이머 컴포넌트 보이기'}
      </button>
      {isShowing && <AutoTimer />}
      <h3>CounterReducer</h3>
      <CounterReducer></CounterReducer>
      <h3>AdvancedCounter</h3>
      <AdvancedCounter></AdvancedCounter>
      <h3>Todo 추가/삭제</h3>
      <Todo></Todo>
      <h3>평균값</h3>
      <GetAverage></GetAverage>
      <h3>최댓값</h3>
      <MaxCompare></MaxCompare> 
    </div>
    );
};

export default App;
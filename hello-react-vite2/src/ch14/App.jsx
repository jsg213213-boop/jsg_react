import DummyJson from './dummyJson/DummyJson';
import Ex1 from './ex/Ex1';
import Jsonplaceholder from './jsonplaceholder/Jsonplaceholder';
import Ex2 from './ex/Ex2';
import NewsList from './newsApi/NewsList';

const App = () => {
  return (
    <div>
      <h1>ch14 API Test</h1>
      <h2>dummyJson</h2>
      <DummyJson></DummyJson>
      <h2>Ex1, JSONPlaceholder 통신 확인 </h2>
      <Ex1></Ex1>
      <h2>Jsonplaceholder</h2>
      <Jsonplaceholder></Jsonplaceholder>
      <h2>Ex2, JSONPlaceholder 게시글 상세확인 </h2>
      <Ex2></Ex2>
      <h2>news Api 테스트</h2>
      <NewsList category="all" />
      
  </div>
  );
};

export default App;

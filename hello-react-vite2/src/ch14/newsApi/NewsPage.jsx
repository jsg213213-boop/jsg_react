import { useParams } from 'react-router-dom';

import DummyJson from '../dummyJson/DummyJson';
import Ex1 from '../ex/Ex1';
import Jsonplaceholder from '../jsonplaceholder/Jsonplaceholder';
import Ex2 from '../ex/Ex2';
import NewsList from './NewsList';
import Categories from './Categories';

const NewsPage = () => {
  // URL: /technology → params.category = 'technology'
  // URL: /           → params.category = undefined
  const { category } = useParams();
  const currentCategory = category || 'all';

  return (
    <>
      {/* 이전 예제및 실습 확인 하려면, 주석 해제하기. */}
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
      <Categories />
      <NewsList category={currentCategory} />
    </>
  );
};

export default NewsPage;

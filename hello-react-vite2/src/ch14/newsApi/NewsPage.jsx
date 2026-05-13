import { useParams } from 'react-router-dom';

import DummyJson from '../dummyJson/DummyJson';
import Ex1 from '../ex/Ex1';
import Jsonplaceholder from '../jsonplaceholder/Jsonplaceholder';
import Ex2 from '../ex/Ex2';
import NewsList from './NewsList';
import Categories from './Categories';
import Ex6 from '../ex/Ex6';
import { useState } from 'react';
import FinalEx from '../ex/FinalEx';

// 실습 5, 순서1, 상단에 이름으로 표기할 내용을 객체 형태로 저장.
const categoryNames = {
  all: '전체보기',
  business: '비즈니스',
  entertainment: '엔터테인먼트',
  health: '건강',
  science: '과학',
  sports: '스포츠',
  technology: '기술',
};

const NewsPage = () => {
  // URL: /technology → params.category = 'technology'
  // URL: /           → params.category = undefined
  const { category } = useParams();
  const currentCategory = category || 'all';
  // 실습 5, 순서2,
  // 상단에 보여줄 이름을, 객체에서 선택.
  const categoryText = categoryNames[currentCategory] || '전체보기';

  // 파이널 실습, 페이지 번호, 상태변수로 지정,
  const [page, setPage] = useState(1);

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
      {/* 실습 5, 순서3, 화면에 출력해보기 */}
      <h2>실습6, 화면 출력</h2>
      <Ex6></Ex6>

      <h2>파이널 실습, 화면 출력</h2>
      {/* 페이지 번호 임의로 3개만 출력 */}
      <div>
        {[1, 2, 3].map((p) => (
          <button key={p} onClick={() => setPage(p)}>
            {p}페이지
          </button>
        ))}
      </div>
      <FinalEx page={page}></FinalEx>

      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        📰 {categoryText} 뉴스
      </h1>
      <Categories />
      <NewsList category={currentCategory} />
    </>
  );
};

export default NewsPage;

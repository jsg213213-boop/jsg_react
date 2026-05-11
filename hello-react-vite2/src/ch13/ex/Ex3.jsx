import { useSearchParams } from 'react-router-dom';

const Ex3 = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const detail = searchParams.get('detail'); // 'true' 또는 null
  const mode = searchParams.get('mode'); // '1' 또는 null
  const lang = searchParams.get('lang'); // 'kr' 또는 'en' 또는 null

  // ⚠️ 쿼리스트링 값은 항상 문자열로 반환됩니다!
  const isDetail = detail === 'true';

  return (
    <div>
      <h1>소개 페이지(실습3) 📋</h1>
      <p>현재 detail 값: {detail ?? '없음'}</p>
      <p>현재 mode 값: {mode ?? '없음'}</p>
      <p>현재 lang 값: {lang ?? '없음'}</p>

      <button onClick={() => setSearchParams({ lang: 'kr' })}>
        한국어 모드
      </button>

      <button onClick={() => setSearchParams({ lang: 'en' })}>영어 모드</button>

      {isDetail && <p style={{ color: 'blue' }}>🔍 상세 정보가 표시됩니다!</p>}

      <div>
        <button onClick={() => setSearchParams({ detail: 'true', mode: '1' })}>
          상세 보기 ON
        </button>
        <button onClick={() => setSearchParams({})}>초기화</button>
      </div>
    </div>
  );
};

export default Ex3;

import { useState } from 'react';
import axios from 'axios';

const Ex1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onClick = async () => {
    setLoading(true);
    setError(null);
    setData(null); // 새로운 데이터를 불러올 때 이전 데이터를 초기화
    
    try {
      // 엔드포인트를 /todos/1에서 /posts/1로 변경
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      setData(response.data);
    } catch (e) {
      setError('게시글을 불러오는 데 실패했습니다.');
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>실습 1: 게시글 정보 불러오기</h1>
      <button onClick={onClick} disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        {loading ? '불러오는 중...' : '포스트 불러오기'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && (
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h3>제목: {data.title}</h3>
          <p><strong>내용:</strong> {data.body}</p>
          <hr />
          <small>Raw Data:</small>
          <textarea
            rows={7}
            cols={50}
            value={JSON.stringify(data, null, 2)}
            readOnly
            style={{ marginTop: '10px', display: 'block', width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default Ex1;
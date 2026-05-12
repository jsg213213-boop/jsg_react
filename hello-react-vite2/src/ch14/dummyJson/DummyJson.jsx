import { useState } from 'react';
import axios from 'axios';

const DummyJson = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onClick = async () => {
    setLoading(true);
    setError(null);
    try {
      // JSONPlaceholder: 무료 Mock API
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      setData(response.data);
    } catch (e) {
      setError('데이터를 불러오는 데 실패했습니다.');
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>axios 기본 예제</h1>
      <button onClick={onClick} disabled={loading}>
        {loading ? '불러오는 중...' : '데이터 불러오기'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <textarea
          rows={7}
          cols={50}
          value={JSON.stringify(data, null, 2)}
          readOnly
          style={{ marginTop: '10px', display: 'block' }}
        />
      )}
    </div>
  );
};

export default DummyJson;
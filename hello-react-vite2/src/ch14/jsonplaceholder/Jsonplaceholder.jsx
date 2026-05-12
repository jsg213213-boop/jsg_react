import { useState, useEffect } from 'react';
import axios from 'axios';

const Jsonplaceholder = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1); // userId 변경으로 다른 게시글 조회

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=5`,
        );
        setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]); // userId가 바뀔 때마다 API 재호출

  return (
    <div style={{ padding: '20px' }}>
      <h1>사용자별 게시글</h1>
      <div>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              marginRight: '8px',
              fontWeight: userId === id ? 'bold' : 'normal',
              background: userId === id ? '#007bff' : '#eee',
              color: userId === id ? 'white' : 'black',
              padding: '4px 12px',
            }}
          >
            User {id}
          </button>
        ))}
      </div>
      {loading ? (
        <p>로딩 중... ⏳</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jsonplaceholder;

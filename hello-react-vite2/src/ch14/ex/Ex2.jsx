import { useState, useEffect } from 'react';
import axios from 'axios';

const Ex2 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1); // userId 변경으로 다른 게시글 조회
  //실습2, 순서1,
  // 선택된 게시글 , 상태 관리.
  const [selectedPost, setSelectPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //실습2, 순서2,
      // userId 변경시 선택 초기화
      setSelectPost(null);
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
          {/* 실습2, 순서3, */}
          {posts.map((post) => (
            <li
              key={post.id}
              onClick={() => setSelectPost(post)}
              style={{
                cursor: 'pointer',
                color: selectedPost?.id === post.id ? 'blue' : 'black',
              }}
            >
              {/* 실습2, 순서3, */}
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
      {/* 실습2, 순서4, 
      선택된 게시글 상세보기 화면
      */}
      {selectedPost && (
        <div
          style={{
            border: '1px solid #ccc',
            padding: '16px',
            marginTop: '16px',
          }}
        >
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      )}
      {/* 실습2, 순서4, */}
    </div>
  );
};

export default Ex2;

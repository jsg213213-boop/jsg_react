import axios from 'axios';
import usePromise from '../newsApi/usePromise';

const FinalEx = ({ page }) => {
  const [loading, resolved, error] = usePromise(
    () =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`,
      ),
    [page],
  );
  if (loading) return <p>⏲️사용자 목록 불러오는 중..</p>;
  if (error) return <p style={{ color: 'red' }}>에러 발생</p>;
  if (!resolved) return null; // 빈화면 그리기.

  // 위의 유효성 체크르가 끝나면,
  const posts = resolved.data;

  if (posts.length === 0) return <p>📋 게시글이 없습니다.</p>;

  return (
    <div>
      <h1>😄게시글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            Title : {post.title} - Content : 📧 {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalEx;

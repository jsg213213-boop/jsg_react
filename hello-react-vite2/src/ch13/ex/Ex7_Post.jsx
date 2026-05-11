import { Link, useParams } from 'react-router-dom';

const posts = {
  1: { title: '첫 번째 게시글', body: '리액트 라우터는 정말 유용합니다!' },
  2: {
    title: '두 번째 게시글',
    body: 'URL 파라미터로 동적 페이지를 만들 수 있어요.',
  },
  3: { title: '세 번째 게시글', body: 'Outlet으로 중첩 라우트를 구현합니다.' },
};

const Ex7_Post = () => {
  const { id } = useParams();
  const post = posts[id];

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">← 목록으로</Link>
    </div>
  ) : (
    <p>게시글을 찾을 수 없습니다.</p>
  );
};

export default Ex7_Post;

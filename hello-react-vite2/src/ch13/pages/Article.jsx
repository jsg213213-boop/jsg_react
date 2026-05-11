import { useParams, Link } from 'react-router-dom';

const articleContent = {
  1: { title: '첫 번째 게시글', body: '리액트 라우터는 정말 유용합니다!' },
  2: { title: '두 번째 게시글', body: 'URL 파라미터로 동적 페이지를 만들 수 있어요.' },
  3: { title: '세 번째 게시글', body: 'Outlet으로 중첩 라우트를 구현합니다.' },
};

const Article = () => {
  const { id } = useParams();
  const article = articleContent[id];

  return article ? (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <Link to="/articles">← 목록으로</Link>
    </div>
  ) : (
    <p>게시글을 찾을 수 없습니다.</p>
  );
};

export default Article;
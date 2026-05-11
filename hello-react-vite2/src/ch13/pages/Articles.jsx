import { Outlet, Link } from 'react-router-dom';

const Articles = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    {/* 왼쪽: 목록 */}
    <div>
      <h2>게시글 목록 📰</h2>
      <ul>
        <li><Link to="/articles/1">게시글 1</Link></li>
        <li><Link to="/articles/2">게시글 2</Link></li>
        <li><Link to="/articles/3">게시글 3</Link></li>
      </ul>
    </div>
    {/* 오른쪽: 선택된 게시글 내용 (Outlet이 자식 라우트 렌더링) */}
    <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '20px' }}>
      <Outlet />
    </div>
  </div>
);

export default Articles;
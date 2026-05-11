import { NavLink, Outlet } from 'react-router-dom';

const Posts = () => {
  const postList = [
    { id: 1, title: '리액트 공부법' },
    { id: 2, title: '라우팅 마스터하기' },
    { id: 3, title: 'Outlet의 활용' },
  ];

  return (
    <div>
      <h2>게시판 목록</h2>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            <NavLink 
              to={`/posts/${post.id}`}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            >
              게시글 {post.id}: {post.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
      {/* 하위 경로(:id)가 렌더링되는 곳 */}
      <Outlet />
    </div>
  );
};

export default Posts;
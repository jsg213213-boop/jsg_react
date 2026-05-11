import { Route, Routes } from 'react-router-dom';
import Ex7_Layout from './Ex7_Layout';
import Ex7_Home from './Ex7_Home';
import Ex7_About from './Ex7_About';
import Ex7_Posts from './Ex7_Posts';
import Ex7_404 from './Ex7_404';
import Ex7_Post from './Ex7_Post';
import Ex7_Post_Main from './Ex7_Post_Main';

//## 🚀 종합 실습 문제 (심화)

// > 아래 요구사항을 모두 충족하는 **미니 블로그** 앱을 만드세요.

// > 1. **공통 레이아웃**: 헤더에 홈/게시판 링크 (NavLink로 활성화 스타일 적용)

// > 2. **홈 (`/`)**: "미니 블로그에 오신 것을 환영합니다" 텍스트

// > 3. **게시판 (`/posts`)**: 게시글 3개 목록 + Outlet

// > 4. **게시글 상세 (`/posts/:id`)**: 해당 게시글 제목/내용 표시

// > 5. **404 페이지**: 없는 경로 접근 시 표시

const Ex7_App = () => {
  return (
    <div>
      <h1>실습 7 작업.</h1>
      <Routes>
        {/* Layout 안에 묶인 라우트들은 Layout을 공유 */}
        <Route element={<Ex7_Layout />}>
          <Route path="/" element={<Ex7_Home />} />
          <Route path="/about" element={<Ex7_About />} />
          <Route path="/posts" element={<Ex7_Posts />}>
            <Route index element={<Ex7_Post_Main />} />
            {/*기본 자식 컴포넌트로 활용 */}
            <Route path=":id" element={<Ex7_Post />} />
          </Route>
          <Route path="*" element={<Ex7_404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Ex7_App;

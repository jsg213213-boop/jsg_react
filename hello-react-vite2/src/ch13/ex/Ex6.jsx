import { useState } from 'react';
import { Navigate } from 'react-router-dom';

// 로그인 여부에 따라 자동 리다이렉트
const Ex6 = () => {
  //   const isLoggedIn = false; // 실제로는 상태나 쿠키로 확인
  // 실습 6
  // 순서1,
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    // replace: true → 뒤로가기 시 /mypage로 돌아오지 않음
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <h2>🔒 마이 페이지 (로그인 필요)</h2>
      <p>환영합니다. 로그인 상태입니다~</p>
      <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
    </div>
  );
};

export default Ex6;

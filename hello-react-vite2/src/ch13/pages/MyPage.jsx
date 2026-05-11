import { Navigate } from 'react-router-dom';

// 로그인 여부에 따라 자동 리다이렉트
const MyPage = () => {
  const isLoggedIn = true;  // 실제로는 상태나 쿠키로 확인

  if (!isLoggedIn) {
    // replace: true → 뒤로가기 시 /mypage로 돌아오지 않음
    return <Navigate to="/login" replace={true} />;
  }

  return <div>🔒 마이 페이지 (로그인 필요)</div>;
};

export default MyPage;
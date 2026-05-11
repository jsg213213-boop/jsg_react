import { useNavigate } from 'react-router-dom';

const UseNavigate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>← 뒤로</button>
      <button onClick={() => navigate(1)}>앞으로 →</button>
      <button onClick={() => navigate('/articles')}>게시판으로</button>
      {/* replace: true → 현재 히스토리를 교체 (뒤로가기 시 이전 페이지 스킵) */}
      <button onClick={() => navigate('/login', { replace: true })}>
        로그인으로
      </button>
    </div>
  );
};

export default UseNavigate;

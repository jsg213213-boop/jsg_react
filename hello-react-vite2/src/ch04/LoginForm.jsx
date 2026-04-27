import  { useState } from 'react';

const LoginForm = () => {
  // 1. 상태 초기화 (아이디와 비밀번호)
  const [form, setForm] = useState({
    userId: '',
    password: '',
  });

  // 2. 구조 분해 할당을 통해 값 추출
  const { userId, password } = form;

  // 3. 입력 값이 변경될 때 실행되는 핸들러
  const onChange = (e) => {
    setForm({
      ...form, // 기존 객체 복사 (불변성 유지)
      [e.target.name]: e.target.value, // name 속성에 따라 해당 값 업데이트
    });
  };

  // 4. 로그인 버튼 클릭 시 실행되는 핸들러
  const onLogin = () => {
    // 유효성 검사
    if (!userId || !password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    // 로그인 비즈니스 로직 (여기서는 alert로 대체)
    alert(`로그인 시도\n아이디: ${userId}\n비밀번호: ${password}`);

    // 로그인 시도 후 입력창 초기화 (필요에 따라 선택)
    setForm({
      userId: '',
      password: '',
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>로그인</h2>
      
      {/* 입력 섹션 */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          name="userId"
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={onChange}
          style={{ width: '100%', marginBottom: '5px', padding: '8px' }}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={onChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      {/* 로그인 버튼 */}
      <button 
        onClick={onLogin}
        style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        로그인하기
      </button>

      {/* 실시간 입력값 확인 (디버깅용) */}
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <p>입력 중인 ID: {userId}</p>
        <p>입력 중인 PW: {password}</p>
      </div>
    </div>
  );
};

export default LoginForm;
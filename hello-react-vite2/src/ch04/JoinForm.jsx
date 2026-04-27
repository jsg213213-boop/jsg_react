import { useState } from 'react';

const JoinForm = () => {
  // 화면과 데이터를 동기화 하기 위한 기본 값을 설정.
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // 객체안의 값을 쉽게 접근 및 이용하기. 구조분해할당.
  const { username, email, password, passwordConfirm } = form;

  // 이벤트 리스너 추가.
  // 1) 변경시 이벤트 반영.
  const onChange = (e) => {
    setForm({
      ...form, // 기존 객체를 복제
      // 변경할 요소를 덮어쓰기용.
      [e.target.name]: e.target.value,
    });
  };

  // 2) 클릭시, 이벤트 리스너 추가
  const onClick = () => {
    // 기본 유효성 체크
    if (!username || !email || !password || !passwordConfirm) {
      alert('모든 값을 입력해주세요');
      return;
    }
    // 화면상에 입력된 패스워드와 확인용 패스워드가 일치시 동작하기.
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 간단, alert , 회원 가입 완료 안내 문구.
    alert(
      '유저명 : ' +
        username +
        ', email : ' +
        email +
        ', password : ' +
        password +
        ', passwordConfirm : ' +
        passwordConfirm,
    );

    // 기존에 입력했던 내용을 다 비우기.
    setForm({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  return (
    <div>
      <h2>함수형 컴포넌트 모양, 회원 가입 연습</h2>
      <h3>username : {username}</h3>
      <h3>email : {email}</h3>
      <h3>password : {password}</h3>
      <h3>passwordConfirm : {passwordConfirm}</h3>
      <input
        type="text"
        name="username"
        placeholder="username 입력해주세요"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email 입력해주세요"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password 입력해주세요"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        name="passwordConfirm"
        placeholder="passwordConfirm 입력해주세요"
        value={passwordConfirm}
        onChange={onChange}
      />
      <button onClick={onClick}>회원가입</button>
    </div>
  );
};

export default JoinForm;

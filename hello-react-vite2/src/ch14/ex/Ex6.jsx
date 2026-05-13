import usePromise from '../newsApi/usePromise';
import axios from 'axios';

//### 📝 실습 문제 6

// > `usePromise` 훅을 사용해서
// `https://jsonplaceholder.typicode.com/users` API를 호출하는 컴포넌트를 만드세요.
// 사용자 이름(name)과 이메일(email) 목록을 화면에 표시하세요.
// >
const Ex6 = () => {
  const [loading, resolved, error] = usePromise(
    () => axios.get('https://jsonplaceholder.typicode.com/users'),
    [],
  );

  if (loading) return <p>⏲️사용자 목록 불러오는 중..</p>;
  if (error) return <p style={{ color: 'red' }}>에러 발생</p>;
  if (!resolved) return null; // 빈화면 그리기.

  // 위의 유효성 체크르가 끝나면,
  const users = resolved.data;

  return (
    <div>
      <h1>😄사용자 목록</h1>
      <ul>
        {users.map((user) => (
          <li>
            Name : {user.name} - Email : 📧 {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex6;

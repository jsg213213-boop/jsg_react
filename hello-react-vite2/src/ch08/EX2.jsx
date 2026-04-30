import useLocalStorage from './useLocalStorage';

const Ex2 = () => {
  // 'user-name'이라는 키로 로컬스토리지에 저장, 기본값은 'Guest'
  const [name, setName] = useLocalStorage('user-name', 'Guest');

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>로컬스토리지 저장 예시</h3>
      <p>저장된 이름: <strong>{name}</strong></p>
      
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="이름을 입력하세요"
      />
      
      <p style={{ color: 'gray', fontSize: '0.8rem' }}>
        * 입력 후 페이지를 새로고침(F5)해도 이름이 유지됩니다.
      </p>
    </div>
  );
};

export default Ex2;
import { useState } from 'react';

const InfoForm = () => {
  // 1. 각각 별도의 state로 관리
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // 이름 변경 핸들러
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // 나이 변경 핸들러
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <div>
        <input 
          value={name} 
          onChange={onChangeName} 
          placeholder="이름을 입력하세요" 
        />
        <input 
          value={age} 
          onChange={onChangeAge} 
          placeholder="나이를 입력하세요" 
        />
      </div>
      
      <hr />

      <div>
        <p><b>이름:</b> {name || '미입력'}</p>
        <p><b>나이:</b> {age || '미입력'}</p>
      </div>
    </div>
  );
};

export default InfoForm;
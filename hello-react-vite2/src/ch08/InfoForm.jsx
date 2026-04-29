import { useState } from 'react';

const InfoForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <div>
        <label>이름 : </label>
        <input
          value={name}
          placeholder="이름 입력"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>나이 : </label>
        <input
          value={age}
          placeholder="나이 입력"
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <h2>
        입력된 정보 - 이름 : {name} , 나이 : {age}
      </h2>
    </div>
  );
};

export default InfoForm;
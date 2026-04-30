import { useState, useRef } from 'react';

const TextInputFocus = () => {
  const [text, setText] = useState('');
  const inputEl = useRef(null); // DOM 접근을 위한 ref 생성

  const onConfirm = () => {
    alert(text);       // 입력된 텍스트를 알림창으로 표시
    setText('');       // 입력창 초기화
    inputEl.current?.focus(); // input 엘리먼트에 포커스 강제 이동
  };

  return (
    <div>
      <input
        ref={inputEl}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트를 입력하세요"
      />
      <button onClick={onConfirm}>확인</button>
    </div>
  );
};

export default TextInputFocus;
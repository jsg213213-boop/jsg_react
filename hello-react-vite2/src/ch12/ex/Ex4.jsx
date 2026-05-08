import { useRef, useCallback, useState } from 'react';
import { produce } from 'immer';

const Ex4 = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  // 입력값 변경 (Immer 사용)
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce(form, (draft) => {
        draft[name] = value;
      })
    );
  }, [form]);

  // [수정 포인트] 등록 핸들러: unshift를 사용하여 맨 앞에 추가
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const info = { id: nextId.current, name: form.name, username: form.username };
    
    setData(
      produce(data, (draft) => {
        // push 대신 unshift를 사용하여 배열의 0번 인덱스로 삽입합니다.
        draft.array.unshift(info);
      })
    );
    
    setForm({ name: '', username: '' });
    nextId.current += 1;
  }, [data, form.name, form.username]);

  // 삭제 핸들러
  const onRemove = useCallback((id) => {
    setData(
      produce(data, (draft) => {
        const index = draft.array.findIndex((info) => info.id === id);
        if (index !== -1) draft.array.splice(index, 1);
      })
    );
  }, [data]);

  return (
    <div style={{ padding: '20px', border: '1px solid orange' }}>
      <h3>실습 4: 새로운 항목 맨 위에 추가 (unshift)</h3>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <ul style={{ marginTop: '10px' }}>
        {data.array.map((info) => (
          <li key={info.id} onClick={() => onRemove(info.id)} style={{ cursor: 'pointer', marginBottom: '5px' }}>
            <strong>{info.username}</strong> ({info.name}) <span style={{ color: 'red', fontSize: '0.8rem' }}>[클릭시 삭제]</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex4;
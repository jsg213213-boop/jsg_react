import { useRef, useCallback, useState } from 'react';
import { produce } from 'immer'; // Immer 불러오기

const Ex3 = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  // [수정 포인트] onChange 함수: Immer 적용
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    
    // produce의 첫 번째 인자로 현재 상태(form)를 넣고, 
    // 두 번째 인자인 draft를 직접 수정합니다.
    setForm(
      produce(form, (draft) => {
        draft[name] = value;
      })
    );
  }, [form]);

  // 등록 핸들러 (참고용 - 여기도 Immer를 쓰면 더 깔끔해집니다)
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const info = { id: nextId.current, name: form.name, username: form.username };
    
    setData(
      produce(data, (draft) => {
        draft.array.push(info); // concat 대신 push 사용 가능!
      })
    );
    
    setForm({ name: '', username: '' });
    nextId.current += 1;
  }, [data, form.name, form.username]);

  // 삭제 핸들러
  const onRemove = useCallback((id) => {
    setData(
      produce(data, (draft) => {
        const index = draft.array.findIndex(info => info.id === id);
        if (index !== -1) draft.array.splice(index, 1); // filter 대신 splice 사용 가능!
      })
    );
  }, [data]);

  return (
    <div style={{ padding: '20px', border: '1px dotted green' }}>
      <h3>실습 3: Immer로 바꾼 입력 폼</h3>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <ul>
        {data.array.map((info) => (
          <li key={info.id} onClick={() => onRemove(info.id)} style={{ cursor: 'pointer' }}>
            {info.username} ({info.name}) ← 클릭 시 삭제
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex3;
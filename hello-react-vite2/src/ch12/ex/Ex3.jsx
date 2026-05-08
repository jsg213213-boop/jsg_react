import { produce } from 'immer';
import { useRef, useCallback, useState } from 'react';

const Ex3 = () => {
  const nextId = useRef(1); // ID 자동 증가용 (렌더링과 무관)
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  // 입력값 변경 핸들러
  // 문제1) , immer 라이브러리 교체,
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      //   setForm({ ...form, [name]: value }); // 스프레드로 불변성 유지
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        }),
      );
    },
    [form],
  );

  // 등록 핸들러
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      // 문제2) , immer 라이브러리 교체,
      //   setData({ ...data, array: data.array.concat(info) }); // concat으로 불변성 유지
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        }),
      );
      setForm({ name: '', username: '' });
      nextId.current += 1;
    },
    [data, form.name, form.username],
  );

  // 삭제 핸들러
  const onRemove = useCallback(
    (id) => {
      // 문제3) , immer 라이브러리 교체,
      //   setData({ ...data, array: data.array.filter((info) => info.id !== id) });
      setData(
        produce(data, (draft) => {
          draft.array = draft.array.filter((info) => info.id != id);
        }),
      );
    },
    [data],
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <ul>
        {data.array.map((info) => (
          <li
            key={info.id}
            onClick={() => onRemove(info.id)}
            style={{ cursor: 'pointer' }}
          >
            {info.username} ({info.name}) ← 클릭 시 삭제
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex3;

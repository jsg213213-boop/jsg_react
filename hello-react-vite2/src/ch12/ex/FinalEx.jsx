import { produce } from 'immer';
import { useState } from 'react';
// > 아래 초기 상태가 있습니다. immer와 useState를 사용하여
// 다음 기능을 구현하는 React 컴포넌트를 작성하세요.

// > 1. 학생 추가 (이름 입력 후 버튼 클릭)

// > 2. 점수 증가 (+10점) 버튼

// > 3. 학생 삭제 버튼

// ```jsx
// const initialState = {
//   students: [
//     { id: 1, name: '김철수', score: 80 },
//     { id: 2, name: '이영희', score: 90 },
//   ],
//   nextId: 3,
// };
// ```
const FinalEx = () => {
  // state 로 관리하기.
  const [state, setState] = useState({
    students: [
      { id: 1, name: '김철수', score: 80 },
      { id: 2, name: '이영희', score: 90 },
    ],
    nextId: 3,
  });

  // state , 학생 이름을 상태 관리
  const [inputName, setInputName] = useState('');
  const [inputScore, setInputScore] = useState('');

  // 학생 추가
  const addStudent = () => {
    if (!inputName.trim() && !inputScore.trim()) return;
    setState(
      produce((draft) => {
        draft.students.push({
          id: draft.nextId,
          name: inputName,
          score: inputScore,
        });
      }),
    );
    setInputName('');
    setInputScore('');
  };

  // 점수 +10
  const addScorePlus10 = (id) => {
    setState(
      produce((draft) => {
        const student = draft.students.find((s) => s.id === id);
        if (student) student.score = Number(student.score) + 10;
      }),
    );
  };

  // 학생 삭제
  const removeStudent = (id) => {
    setState(
      produce((draft) => {
        const index = draft.students.findIndex((s) => s.id === id);
        if (index !== -1) draft.students.splice(index, 1);
      }),
    );
  };

  return (
    <div>
      <h2>학생관리</h2>
      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="학생 이름 입력"
      />
      <input
        value={inputScore}
        onChange={(e) => setInputScore(e.target.value)}
        placeholder="학생 점수 입력"
      />
      <button onClick={addStudent}>추가</button>
      <h3>학생목록</h3>
      <ul>
        {state.students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.score}점
            <button onClick={() => addScorePlus10(s.id)}>+10점</button>
            <button onClick={() => removeStudent(s.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalEx;

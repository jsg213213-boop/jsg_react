import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  // 오름차순, 내림차순 정렬 기능
  // 순서1
  // 오름차순(사전식 정렬)
  const sortAsscending = () => {
    // 복제한 배열을 이용해서, 정렬 후, 교체 작업 할 예정.
    //(a, b) => a.text.localeCompare(b.text)
    // a => 첫번째 요소의 객체  { id: 1, text: '눈사람' },
    // b => 두번째 요소의 객체  { id: 2, text: '얼음' },
    // localeCompare, a 요소 와 b 요소를 비교해서,
    // 양수(0보다크면), a 가 b보다 뒤에 있음.
    // 0 , a , b 같은 자리.
    // 음수 a 가 b보다 앞에 있음.
    const sortedNames = [...names].sort((a, b) => a.text.localeCompare(b.text));
    // 기존 정렬이 안된 배열 -> 정렬된 배열로 교체 작업.
    setNames(sortedNames);
  };

  // 오름차순, 내림차순 정렬 기능
  // 순서2
  // 내림차순 정렬 , 위의 로직을 반대로 사용.
  const sortDescending = () => {
    const sortedNames = [...names].sort((a, b) => b.text.localeCompare(a.text));
    // 기존 정렬이 안된 배열 -> 정렬된 배열로 교체 작업.
    setNames(sortedNames);
  };

  // 복구 기능 구현
  // 순서1
  // 삭제할 요소를 따로 저장할 state 만들기.
  const [deletedItems, setDeletedItems] = useState([]);

  const onChange = (e) => setInputText(e.target.value);

  // 추가 작업 : C
  const onClick = () => {
    // 공백은 입력 못하게, 기본 유효성 체크 설정.
    if (!inputText.trim()) {
      alert('공백은 입력 할수 없습니다.');
      return;
    }

    // 추가시, 중복된 부분은 추가 못하게 막기
    // 순서1,
    // some 함수의 , 정의 ,
    // 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
    // 하나라도 일치하면 true, 모두 일치하지 않으면 false를 반환합니다. (중복 검사에 유용)
    if (names.some((name) => name.text === inputText)) {
      alert('이미 존재하는 항목입니다.');
      setInputText('');
      return;
    }

    // concat : 기존 배열에 새로운 요소를 추가하여 완전히 새로운 배열을 만듭니다.
    const nextNames = names.concat({ id: nextId, text: inputText });
    // 기존 배열을 교체하는 작업
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  // 삭제 작업 : D
  const onRemove = (id) => {
    // filter : 배열을 순회하며 주어진 조건 함수가 true를 반환하는 요소만 모아 새로운 배열을 만듭니다.
    // ex)
    //filter ,모든 요소를 검사를해서, 조건에
    // 맞는 요소만 뽑아서 새로운 배열을 생성.
    // (name), name 이라는 인자값에는
    // { id: 1, text: '눈사람' }
    // 만약 id = 1, 조건에 맞는 배열의 요소는
    // id = 2, 3, 4 조건에 맞고,
    // id = 1 조건에 거짓 :
    // 결론, 필터가 된 새로운 배열 : id = 2,3,4
    // name.id = 2 인경우  2 !== 1(삭제할 요소) , 참
    // name.id = 3 인경우  3 !== 1(삭제할 요소) , 참
    // name.id = 4 인경우  4 !== 1(삭제할 요소) , 참
    // nextNames =
    // [
    // { id: 2, text: '얼음' },
    // { id: 3, text: '눈' },
    // { id: 4, text: '바람' },
    // ]

    // 복구 기능 구현
    // 순서2
    // 삭제할 요소를 선택하면, 이요소를 찾아서, 1) 원래대로 삭제
    // 2) 삭제할 요소를 담을 배열에 넣기
    const removedItem = names.find((name) => name.id === id);

    // 삭제할 요소를 삭제할지 여부를 컨펌 확인 후, 삭제도 진행하고, 삭제된 요소를 가지는 배열에 추가.
    if (confirm(`${removedItem.text}를 삭제하시겠습니까?`)) {
      // 삭제하기전에, deletedItems 배열에 담기.
      setDeletedItems([...deletedItems, removedItem]);
      // 원래대로 삭제기능,
      const nextNames = names.filter((name) => name.id !== id);
      setNames(nextNames);
      alert(`삭제한 요소는 :  ${id}`);
    }
  };

  // 복구 기능 구현
  // 순서3
  // 삭제 한 요소를 가지는 배열, 출력하는 배열로 옮기기 작업.
  const restoreItem = (id) => {
    // 삭제한 요소를 가지는 배열에서, 복구할 요소를 찾고
    const restoredItem = deletedItems.find((item) => item.id === id);
    // 출력할 배열에, 복구할 요소를 추가 작업.
    setNames([...names, restoredItem]);
    // 기존 삭제 요소를 가지는 배열에서, 제거해야함.
    setDeletedItems(deletedItems.filter((item) => item.id !== id));
  };

  // 수정하기. U,
  // 이벤트 리스너, 우클릭을 클릭시, (prompt 창 하나 띄워서)수정할 내용을 입력하고, 수정 시도해보기.

  // 수정 순서1
  // 수정하는 로직.
  const onUpdate = (id, newText) => {
    const updatedNames = names.map((name) =>
      name.id === id ? { ...name, text: newText } : name,
    );
    setNames(updatedNames);
  };

  // 수정 순서2
  // 수정 이벤트 처리.
  const rightClick = (id, text) => {
    const newText = prompt('수정할 내용을 입력하세요.', text);
    if (newText && newText.trim()) {
      onUpdate(id, newText);
    }
  };

  // names , 기존 배열에서, map 내장함수를 이용해서, 조건에 맞는 새로운 배열 : namesList 생성.
  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => onRemove(name.id)}
      // 수정 순서3
      onContextMenu={() => rightClick(name.id, name.text)}
    >
      {name.text}
    </li>
  ));

  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="항목을 입력하세요"
      />
      <button onClick={onClick}>추가</button>

      {/* 오름차순, 내림차순 정렬 기능
    순서3 */}
      <button onClick={sortAsscending}>오름차순 정렬</button>
      <button onClick={sortDescending}>내림차순 정렬</button>
      <ul>{namesList}</ul>
      {/* // 복구 기능 구현
        // 순서3 */}
      <h2>삭제한 요소 목록 출력</h2>
      {deletedItems.length > 0 && (
        <ul>
          {deletedItems.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => restoreItem(item.id)}>복구</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default IterationSample;

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

  // 복구 기능 구현
  // 순서1
  // 삭제할 요소를 따로 저장할 state 만들기.
  const [deletedItems, setDeletedItems] = useState([]);

  const onChange = (e) => setInputText(e.target.value);

  // 추가 작업 : C
  const onClick = () => {
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

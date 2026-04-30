import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // 1. 초기값 설정: 로컬스토리지에 값이 있으면 가져오고, 없으면 initialValue 사용
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("LocalStorage 읽기 에러:", error);
      return initialValue;
    }
  });

  // 2. 값을 업데이트하고 로컬스토리지에도 저장하는 함수
  const setValue = (value) => {
    try {
      // useState처럼 함수형 업데이트 지원
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("LocalStorage 저장 에러:", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
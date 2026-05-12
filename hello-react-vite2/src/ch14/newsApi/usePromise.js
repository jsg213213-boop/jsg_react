import { useState, useEffect } from 'react';

// promiseCreator: Promise를 반환하는 함수
// deps: useEffect 의존성 배열 (deps가 바뀌면 재실행)
export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const result = await promiseCreator();
        setResolved(result);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // deps를 그대로 전달

  // [로딩상태, 성공데이터, 에러] 배열 반환
  return [loading, resolved, error];
}
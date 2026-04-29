import { useEffect } from 'react';

const MountLog = () => {
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!-마운트효과.');
  }, []); // 의존성 배열의 모양에 따라서, 마운트 효과를 낼수 있다. 빈배열이면, 마운트 효과,

  return (
    <div>
      <h3>콘솔에서, 마운트 되는 효과 부분 확인 해주세요</h3>
    </div>
  );
};

export default MountLog;
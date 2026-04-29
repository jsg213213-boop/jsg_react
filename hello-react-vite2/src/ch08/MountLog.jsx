import { useEffect } from 'react';

const MountLog = () => {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타났습니다!');
  }, []); // 빈 배열을 넣어 마운트 시에만 실행되도록 설정

  return (
    <div>
      <p>콘솔을 확인해 보세요.</p>
    </div>
  );
};

export default MountLog;
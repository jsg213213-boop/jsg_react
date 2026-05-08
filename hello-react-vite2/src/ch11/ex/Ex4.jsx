import { memo, useCallback, useState } from 'react';

const Row = memo(function Row({ label, onPing }) {
  console.log('Row 렌더:', label);
  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        padding: 10,
        borderBottom: '1px solid #eee',
        alignItems: 'center',
      }}
    >
      <span style={{ flex: 1 }}>{label}</span>
      <button type="button" onClick={onPing} style={{ padding: '4px 12px' }}>
        ping
      </button>
    </div>
  );
});

const Ex4 = () => {
  const [parentCount, setParentCount] = useState(0);

  // 🐛 문제: 왜 memo가 있는데 Row가 계속 리렌더될까요?
  // 업데이트 될때 마다, 계속 함수가 새롭게 생성이 되고 있다. 1) handlePingA 2) handlePingB

  // 그래서, 해결책 -> useCallback를 이용해서, 한번 생성 후, 재사용. 1) handlePingA 2) handlePingB
  const handlePingA = useCallback(() => {
    console.log('ping A!');
  }, []);

  const handlePingB = useCallback(() => {
    console.log('ping B!');
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Q4 — useCallback</h1>
      <button
        type="button"
        onClick={() => setParentCount((c) => c + 1)}
        style={{ padding: '8px 16px', marginBottom: 16 }}
      >
        부모 리렌더 유발 ({parentCount})
      </button>
      <Row label="항목 A" onPing={handlePingA} />
      <Row label="항목 B" onPing={handlePingB} />
    </div>
  );
};

export default Ex4;

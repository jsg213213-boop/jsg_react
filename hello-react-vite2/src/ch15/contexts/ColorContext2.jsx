import { createContext, useState } from 'react';

// 기본값: 타입 힌트 역할 (실제 값은 Provider가 공급)
const ColorContext2 = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// Provider를 감싼 커스텀 컴포넌트
// jsx 문법이 같이 사용중.
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext2.Provider value={value}>{children}</ColorContext2.Provider>
  );
};

// Consumer를 별칭으로 export (사용 편의)
const { Consumer: ColorConsumer } = ColorContext2;

export { ColorProvider, ColorConsumer };
export default ColorContext2;

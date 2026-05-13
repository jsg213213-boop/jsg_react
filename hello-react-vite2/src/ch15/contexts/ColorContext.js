import { createContext } from 'react';

// 기본값 설정 (Provider 없을 때 사용)
const ColorContext = createContext({ color: 'black' });

export default ColorContext;
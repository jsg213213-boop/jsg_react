import { useContext } from 'react';
import ColorContext from '../contexts/ColorContext2';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors2 = () => {
  const { actions } = useContext(ColorContext); // actions만 꺼내서 사용

  return (
    <div style={{ padding: '10px' }}>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex', gap: '4px' }}>
        {colors.map(color => (
          <div
            key={color}
            style={{
              background: color,
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={e => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors2;
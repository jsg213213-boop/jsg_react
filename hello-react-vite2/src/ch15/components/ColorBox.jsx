import ColorContext from '../contexts/ColorContext';

const ColorBox = () => (
  <ColorContext.Consumer>
    {(value) => (
      <div>
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
            border: '1px solid #333',
          }}
        />
        <p>현재 색상: {value.color}</p>
      </div>
    )}
  </ColorContext.Consumer>
);

export default ColorBox;

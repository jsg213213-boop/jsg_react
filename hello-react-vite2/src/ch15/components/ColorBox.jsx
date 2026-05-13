import ColorContext from '../contexts/ColorContext';

const ColorBox = () => (
  <ColorContext.Consumer>
    {value => (
      <div
        style={{
          width: '64px',
          height: '64px',
          background: value.color,
          border: '1px solid #333',
        }}
      />
    )}
  </ColorContext.Consumer>
);

export default ColorBox;
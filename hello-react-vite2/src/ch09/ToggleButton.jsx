import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ToggleButton.module.css';

const cx = classNames.bind(styles);

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <button 
      className={cx('button', { active: isActive })} 
      onClick={handleToggle}
    >
      {isActive ? '활성 상태' : '비활성 상태'}
    </button>
  );
};

export default ToggleButton;
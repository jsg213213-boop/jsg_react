import classNames from 'classnames/bind';
import styles from './Badge.module.css';

const cx = classNames.bind(styles);

const Badge = ({ type, children }) => {
  return (
    // 기본 badge 클래스와 type(success, warning, error) 클래스를 동시 적용
    <div className={cx('badge', type)}>
      {children}
    </div>
  );
};

export default Badge;
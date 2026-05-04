// CSSModule.jsx
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);

const CSSModule = ({ inverted = false }) => (
  <div className={cx('wrapper', { inverted })}>
    안녕하세요, 저는 <span className="something">정성규입니다!</span>
  </div>
);

export default CSSModule;
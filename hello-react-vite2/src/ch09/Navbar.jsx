import { useState } from 'react';
import './Navbar.scss'; // 작성한 SCSS 파일을 import 하세요.

const Navbar = () => {
  const menus = ['홈', '소개', '서비스', '연락처'];
  const [activeMenu, setActiveMenu] = useState('홈');

  return (
    <div>
      <nav className="Navbar">
        <div className="nav-brand">MyApp</div>
        <ul className="nav-menu">
          {menus.map((menu) => (
            <li key={menu} className="nav-item">
              <a
                className={menu === activeMenu ? 'active' : ''}
                onClick={() => setActiveMenu(menu)}
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
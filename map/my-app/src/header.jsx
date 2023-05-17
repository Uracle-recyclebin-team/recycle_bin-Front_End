import React from 'react';
import logo from './image/logo_w.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Main-header">
        <div className='Main-Name'>
          <img src={logo} className="Main-logo" alt="logo" />
          <p>경일대 안내앱</p>
        </div>
        <ul className="Main-Top">
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>지도</Link></li>
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>내선번호</Link></li>
          <li><Link to="/phone" style={{ textDecoration: "none", color: "white" }}>학과 교수님</Link></li>
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>사무실</Link></li>
        </ul>
    </header>
  );
};

export default Header;
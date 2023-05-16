import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image/logo_w.png';
import map from './image/map.png';
import './main.css';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <div className='Main-Name'>
          <img src={logo} className="Main-logo" alt="logo" />
          <p>경일대 안내앱</p>
        </div>
        <ul className="Main-Top">
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>지도</Link></li>
          <li><Link to="/building" style={{ textDecoration: "none", color: "white" }}>내선번호</Link></li>
          <li><Link to="/phone" style={{ textDecoration: "none", color: "white" }}>학과 교수님</Link></li>
          <li><Link to="/building" style={{ textDecoration: "none", color: "white" }}>사무실</Link></li>
        </ul>
      </header>
      <div className="Map_Middle">
        <img src={map} className="Map_img" alt="Map" />
      </div>
      <div className="Map_Bottom">
        <ul>
          <li>01 본관</li>
          <li>02 중앙도서관/학생서비스센터</li>
          <li>03 3호관(교수연수동)</li>
          <li>05 5호관</li>
          <li>06 6호관</li>
          <li>07 7호관</li>
          <li>08 8호관</li>
          <li>09 9호관</li>
          <li>10 학생생활관(지성관)</li>
          <li>11 11호관</li>
          <li>12 창의적융합교육센터</li>
          <li>13 학생회관/학생식당/복지매장</li>
          <li>14 14호관/KIU철도아카데미</li>
          <li>17 17호관/BLS센터</li>
          <li>18 18호관</li>
          <li>19 학생생활관(웅비관)</li>
          <li>20 KIU피트니스 센터</li>
          <li>21 종힙체육관</li>
          <li>22 22호관/국제교류교육원</li>
          <li>23 R&DB센터/창업지원단</li>
          <li>24 학생생활관(목련관)</li>
          <li>25 산학교육관</li>
          <li>26 강당/코워킹 스페이스</li>
          <li>27 풋살경기장</li>
          <li>28 자율주행차융합기술연구소</li>
          <li>30 대운동장</li>
          <li>31 노천강당</li>
          <li>32 취업처/대학일자리센터/현장실습지원센터/학생상담센터</li>
          <li>33 학생생활관(일청관)</li>
          <li>36 하늘정원</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;

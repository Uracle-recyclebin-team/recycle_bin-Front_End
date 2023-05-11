import logo from './image/logo_w.png';
import map from './image/map.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>경일대 안내앱</p>
      </header>
      <middle className="Map_Middle">
        <search className="Search">
          <input type="text" className="Search_Bar" />
          <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_search-25.png" type="button" className="Search_Btn" alt="btn" />
        </search>
        <img src={map} className="Map_img" alt="Map" />
      </middle>
      <bottom className="Map_Bottom">
        <table className="Map_Table">
          <tr>
            <td><a href="?">01 본관</a></td>
            <td><a href="?">09 9호관</a></td>
            <td><a href="?">19 학생생활관(웅비관)</a></td>
            <td><a href="?">27 풋살경기장</a></td>
            
          </tr>
          <tr>
            <td><a href="?">02 중앙도서관/학생서비스센터</a></td>
            <td><a href="?">10 학생생활관(지성관)</a></td>
            <td><a href="?">20 KIU피트니스 센터</a></td>
            <td><a href="?">28 자율주행차융합기술연구소</a></td>
          </tr>
          <tr>
            <td><a href="?">03 3호관(교수연수동)</a></td>
            <td><a href="?">11 11호관</a></td>
            <td><a href="?">21 종힙체육관</a></td>
            <td><a href="?">29 정문</a></td>
          </tr>
          <tr>
            <td>     </td>
            <td><a href="?">12 창의적융합교육센터</a></td>
            <td><a href="?">22 22호관/국제교류교육원</a></td>
            <td><a href="?">30 대운동장</a></td>
          </tr>
          <tr>
            <td><a href="?">05 5호관</a></td>
            <td><a href="?">13 학생회관/학생식당/복지매장</a></td>
            <td><a href="?">23 R&DB센터/창업지원단</a></td>
            <td><a href="?">31 노천강당</a></td>
          </tr>
          <tr>
            <td><a href="?">06 6호관</a></td>
            <td><a href="?">14 14호관/KIU철도아카데미</a></td>
            <td><a href="?">24 학생생활관(목련관)</a></td>
            <td><a href="?">32 취업처/대학일자리센터/현장실습지원센터/학생상담센터</a></td>
          </tr>
          <tr>
            <td><a href="?">07 7호관</a></td>
            <td><a href="?">17 17호관/BLS센터</a></td>
            <td><a href="?">25 산학교육관</a></td>
            <td><a href="?">33 학생생활관(일청관)</a></td>
          </tr>
          <tr>
            <td><a href="?">08 8호관</a></td>
            <td><a href="?">18 18호관</a></td>
            <td><a href="?">26 강당/코워킹 스페이스</a></td>
            <td><a href="?">36 하늘정원</a></td>
          </tr>
        </table>
      </bottom>
    </div>
  );
}

export default App;

import logo from './image/logo_w.png';
import { Link } from 'react-router-dom';
import './phone.css';

function Phone() {
  return (
    <div className="Phone">
      <header className="Phone-header">
        <div className='Phone-Name'>
          <img src={logo} className="Phone-logo" alt="logo" />
          <p>경일대 안내앱</p>
        </div>
        <ul className="Phone-Top">
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>지도</Link></li>
          <li><Link to="/building" style={{ textDecoration: "none", color: "white" }}>내선번호</Link></li>
          <li><Link to="/phone" style={{ textDecoration: "none", color: "white" }}>학과 교수님</Link></li>
          <li><Link to="/building" style={{ textDecoration: "none", color: "white" }}>사무실</Link></li>
        </ul>
      </header>
        <table className="Main_Table">
          <tbody>
            <tr>
              <td><img src="img/김권양.png" alt="" height="200px" width="200px" /></td>
              <td><h2>김권양</h2><br/><br/><br/><br/>06호관 416호실<br/>053-600-5561<br/></td>
            </tr>
            <tr>
            <td><img src="img/김현성.jpg" alt="" height="200px" width="200px" /></td>
              <td><h2>김현성</h2><br/><br/><br/><br/>06호관 418호실<br/>053-600-5621<br/></td>
            </tr>
            <tr>
            <td><img src="img/김혜정.jpg" alt="" height="200px" width="200px" /></td>
              <td><h2>김혜정</h2><br/><br/><br/><br/>06호관 420호실<br/>053-600-5627<br/></td>
            </tr>
            <tr>
            <td><img src="img/윤은준.jpg" alt="" height="200px" width="200px" /></td>
              <td><h2>윤은준</h2><br/><br/><br/><br/>06호관 421호실<br/>053-600-5623<br/></td>
            </tr>
            <tr>
            <td><img src="img/조현철.jpg" alt="" height="200px" width="200px" /></td>
              <td><h2>조현철</h2><br/><br/><br/><br/>06호관 415호실<br/>053-600-5563<br/></td>
            </tr>
            <tr>
            <td><img src="img/하일규.jpg" alt="" height="200px" width="200px" /></td>
              <td><h2>하일규</h2><br/><br/><br/><br/>06호관 419호실<br/>053-600-5564<br/></td>
            </tr>
            <tr>
            <td><img src="img/황규성.jpg" alt="" height="200px" width="200px" /></td>
              <td><h2>황규성</h2><br/><br/><br/><br/>06호관 412호실<br/>053-600-5624<br/></td>
            </tr>            
          </tbody>
        </table>
      </div>
  );
}

export default Phone;

import React, { useState } from 'react';
import logo from './image/logo_w.png';
import image from './image/noimage-w-900.png';
import image2 from './image/map.png';
import { Link } from 'react-router-dom';
import './main.jsx';
import './main.css';
import './building.css';

function Building() {
    const [isHidden, setIsHidden] = useState(false);
    const toggleDiv = () => {
        setIsHidden(!isHidden);
    };
    return (
        <div className="Building">
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
            <h1>6 호관</h1>
            <div className="Building-Middle" style={{ display: isHidden ? 'none' : 'block' }}>
                <img src={image} className="Building-img" alt="Building-img" />
                <div className='Building-Middle-Btn'>
                    <button onClick={toggleDiv}>
                        <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-double-up-40.png" alt="BtnImg" />
                    </button>
                </div>
            </div>
            <div className='Building-Middle2' style={{ display: isHidden ? 'block' : 'none' }}>
                <img src={image} className="Building-img" alt="Building-img" />
                <img src={image2} className="Building-img2" alt="Building-img2" />
                <button className='leftBtn'>
                    <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-left-40.png" alt="LeftBtnImg" />
                </button>
                <button className='rightBtn'>
                    <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-right-40.png" alt="RightBtnImg" />
                </button>
            </div>
            <div className="Building-Bottom">
                <table className='Building-Bottom-Table'>
                    <tr>
                        <td>1층</td>
                        <td>ㄱㄱ과</td>
                    </tr>
                    <tr>
                        <td>2층</td>
                        <td>ㄴㄴ과</td>
                    </tr>
                    <tr>
                        <td>3층</td>
                        <td>ㄷㄷ과</td>
                    </tr>
                    <tr>
                        <td>4층</td>
                        <td>ㄹㄹ과</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
    
export default Building;
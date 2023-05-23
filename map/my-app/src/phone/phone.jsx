import React,{ useState } from 'react';
import Header from '../header/header';
import '../phone/phone.css';
import '../main/main.css';



function Phone() {  
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleParentSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return(
    
    <div className="Phone">
      <Header />
      <form action="">
      <select value={selectedOption} onChange={handleParentSelectChange} className='box2'>
        <option value="option0">선택해주세요</option>
        <option value="option1">SMART엔지니어링대학</option>
        <option value="option2">SMART라이프대학</option>
        <option value="option3">SMART스포츠대학</option>
        <option value="option4">후지오네칼리지</option>
        <option value="option5">기업인재대학</option>
        <option value="option6">미래융합대학</option>
        <option value="option7">산학인재교육원</option>
      </select>

      {selectedOption && (
        <select className='box2'>
          {selectedOption === 'option1' && 
          (
            <>
              <option value="childOption1">스마트디자인공학부</option>
              <option value="childOption2">전기전자에너지학부</option>
              <option value="childOption3">철도학부</option>
              <option value="childOption4">소방방재학부</option>
              <option value="childOption5">건축디자인과</option>
              <option value="childOption6">건축토목공학과</option>
              <option value="childOption7">스마트보안학과</option>
            </>
          )}

          {selectedOption === 'option2' && (
            <>
              <option value="childOption8">만화애니메이션학부</option>
              <option value="childOption9">게임엔터테인먼트학과</option>
              <option value="childOption10">K-방송예술학부</option>
              <option value="childOption11">사진영상학부</option>
              <option value="childOption12">콘텐츠디자인학과</option>
              <option value="childOption13">상담심리학과</option>
              <option value="childOption14">경찰학과</option>
              <option value="childOption15">부동산지적학과</option>
              <option value="childOption16">사회복지학과</option>
              <option value="childOption17">글로벌비즈니스학부</option>
              <option value="childOption18">뷰티학과</option>
              <option value="childOption19">항공서비스학과</option>
              <option value="childOption20">응급구조학과</option>
              <option value="childOption21">간호학과</option>
            </>
          )}

          {selectedOption === 'option3' && (
            <>
              <option value="childOption22">전문스포츠학부</option>
              <option value="childOption23">특수군사학과</option>
              <option value="childOption24">스포츠단</option>
            </>
          )}
          {selectedOption === 'option4' && (
            <>
              <option value="childOption25">교양학부</option>
              <option value="childOption26">자율전공학부</option>
            </>
          )}
          {selectedOption === 'option5' && (
            <>
              <option value="childOption27">스마트팩토리융합학과</option>
              <option value="childOption28">스마트전력인프라학과</option>
              <option value="childOption29">스마트푸드테크학과</option>              
              <option value="childOption30">스마트경영공학과</option>
            </>
          )}
          {selectedOption === 'option6' && (
            <>
              <option value="childOption31">스마트산업학부</option>
              <option value="childOption32">스마트경영학부</option>
              <option value="childOption33">평생교육학부</option>              
              <option value="childOption34">평생KIUM학부</option>                            
              <option value="childOption35">기계자동화융합학과</option>
            </>
          )}
          {selectedOption === 'option7' && (
            <>
              <option value="childOption36">스마트융합학부</option>
            </>
          )}
        </select>
      )}
      <input type="text"  id="name"/>
      <button>검색</button>
    </form>
      
        <div className='Phone_Table_Container'>
          <table className="Phone_Table">
            <tbody>
              <tr>
                <td><img src="../img/김권양.png" alt="" height="200px" width="200px" /></td>
                <td><h2>김권양</h2><br/><br/><br/><br/>06호관 416호실<br/>053-600-5561<br/></td>
              </tr>
              <tr>
              <td><img src="../img/김현성.jpg" alt="" height="200px" width="200px" /></td>
                <td><h2>김현성</h2><br/><br/><br/><br/>06호관 418호실<br/>053-600-5621<br/></td>
              </tr>
              <tr>
              <td><img src="../img/김혜정.jpg" alt="" height="200px" width="200px" /></td>
                <td><h2>김혜정</h2><br/><br/><br/><br/>06호관 420호실<br/>053-600-5627<br/></td>
              </tr>
              <tr>
              <td><img src="../img/윤은준.jpg" alt="" height="200px" width="200px" /></td>
                <td><h2>윤은준</h2><br/><br/><br/><br/>06호관 421호실<br/>053-600-5623<br/></td>
              </tr>
              <tr>
              <td><img src="../img/조현철.jpg" alt="" height="200px" width="200px" /></td>
                <td><h2>조현철</h2><br/><br/><br/><br/>06호관 415호실<br/>053-600-5563<br/></td>
              </tr>
              <tr>
              <td><img src="../img/하일규.jpg" alt="" height="200px" width="200px" /></td>
                <td><h2>하일규</h2><br/><br/><br/><br/>06호관 419호실<br/>053-600-5564<br/></td>
              </tr>
              <tr>
              <td><img src="../img/황규성.jpg" alt="" height="200px" width="200px" /></td>
                <td><h2>황규성</h2><br/><br/><br/><br/>06호관 412호실<br/>053-600-5624<br/></td>
              </tr>            
            </tbody>
          </table>
        </div>
      </div>
      
  );
  
}

export default Phone;

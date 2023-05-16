import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import Header from './Header';*/
import Main from './main';
/*import Product from './Product';*/
/*import NotFound from './NotFound';*/
import Building from './building';
import Phone from './phone';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				{/*<Header />*/}
				<Routes>
					<Route path="/" element={<Main />}></Route>
					{/*<Route path="/product/*" element={<Product />}></Route>*/}
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/*<Route path="*" element={<NotFound />}></Route>*/}
                    <Route path="/building/*" element={<Building />}></Route>
                    <Route path="/phone/*" element={<Phone />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
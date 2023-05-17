import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import Header from './Header';*/
import Main from './main';
import Building from './building';
import Phone from './phone';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				{/*<Header />*/}
				<Routes>
					<Route path="/" element={<Main />}></Route>
                    <Route path="/building/*" element={<Building />}></Route>
                    <Route path="/phone/*" element={<Phone />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';

function App() {

	const [isVisible, setIsVisible] = useState(false);
	const [pathname, setPathname] = useState("");

	useEffect(()=>{
		setIsVisible(false);
		setPathname(window.location.pathname);
	}, []);

	console.log("isVisible is it even triggered after pressing navbar button?" + isVisible);

  return (
    <>
	<div> window.location.pathname: {pathname}</div>

	<BrowserRouter>
		<Navbar setIsVisible={setIsVisible} isVisible={isVisible} pathname={pathname} setPathname={setPathname} />

		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/About" element={<About />} />
			<Route path="/Contact" element={<Contact />} />
			<Route path="/faq" element={<Faq />} />
		</Routes>
		<Footer setIsVisible={setIsVisible} isVisible={isVisible}/>
	</BrowserRouter>
    </>
  )
}

export default App

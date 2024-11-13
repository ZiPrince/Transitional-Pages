import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {


  return (
    <>

	<BrowserRouter>
		<Navbar />

		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/About" element={<About />} />
			<Route path="/Contact" element={<Contact />} />
			<Route path="/faq" element={<Faq />} />
		</Routes>
		<Footer />
	</BrowserRouter>
    </>
  )
}

export default App

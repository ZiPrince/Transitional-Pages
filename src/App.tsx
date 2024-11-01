import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import One from './Pages/One';
import Two from './Pages/Two';
import Three from './Pages/Three';
import Navbar from './Components/Navbar';

function App() {


  return (
    <>

	<BrowserRouter>
		<Navbar />

		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/About" element={<About />} />
			<Route path="/One" element={<One />} />
			<Route path="/Two" element={<Two />} />
			<Route path="/Three" element={<Three />} />
		</Routes>
	</BrowserRouter>
    </>
  )
}

export default App

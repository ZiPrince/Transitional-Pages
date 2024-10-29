import { Link, useNavigate } from "react-router-dom"
import '../App.css';
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Navbar = () => {

	//keeping track when to start animation:
	const [clicked, setClicked] = useState(false);
	const navigate = useNavigate();

	const handleClick = () => {
		setClicked(true);
		setTimeout(()=>{
			setClicked(false);
			navigate('/About');
		}, 500);
	}
		
	return (
		<>
		<div className="navbar">
			<button onClick={handleClick}> About </button> <br/>
			<Link to ="/One"> One </Link><br/>
			<Link to ="/Two"> Two </Link><br/>
			<Link to ="/Three"> Three </Link><br/>
		</div>	
		<div className= {clicked? ("loader") : (" ")}></div>



	</>
	)
}

export default Navbar

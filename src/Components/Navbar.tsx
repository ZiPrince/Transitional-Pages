import { Link, To, useNavigate } from "react-router-dom"
import '../App.css';
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Navbar = () => {

	//keeping track when to start animation:
	const [clicked, setClicked] = useState(false);
	const [clickedHome, setHomeClicked] = useState(false);
	const [clickedOne, setClickedOne] = useState(false); 
	const [clickedTwo, setClickedTwo] = useState(false); 
	const [clickedThree, setClickedThree] = useState(false); 

	const navigate = useNavigate();

	const handleClickHome = () => {
		setHomeClicked(true);
		setTimeout(()=>{
			setHomeClicked(false);
			navigate('/');
		}, 380);
	}

	const handleClick = () => {
		setClicked(true);
		setTimeout(()=>{
			setClicked(false);
			navigate('/About');
		}, 200);
	}

	const handleClickOne = () => {
		setClickedOne(true);
		setTimeout(()=>{
			setClickedOne(false);
			navigate('/One');
		}, 500);
	}

	const handleClickTwo = () => {
		setClickedTwo(true);
		setTimeout(()=>{
			setClickedTwo(false);
			navigate('/Two');
		}, 500);
	}	
	const handleClickThree = () => {
		setClickedThree(true);
		setTimeout(()=>{
			setClickedThree(false);
			navigate('/Three');
		}, 500);
	}

	console.log("clicked: " + clicked + " clickedOne? " +  clickedOne);
	
	return (
		<>
		<div className="navbar">
			<span><button onClick={handleClickHome}>Home</button></span>
			<span className="navbarRight">
				<button onClick={handleClick}> About </button> <br/>
				<button onClick={handleClickOne}> One </button><br/>
				<button onClick={handleClickTwo}> Two </button><br/>
				<button onClick={handleClickThree}> Three </button><br/>
			</span>
		</div>
		<div className= {clickedHome? ("homeLoader") : ("")}></div>
		<div className= {clicked? ("loaderAbout") : ("")}></div>
		<div className= {clickedOne? ("loaderOne") : ("")}></div>
		<div className= {clickedTwo? ("loaderTwo") : ("")}></div>
		<div className= {clickedThree? ("loaderThree") : ("")}></div>
	</>
	)
}

export default Navbar

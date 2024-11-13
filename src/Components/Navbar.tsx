import { useNavigate } from "react-router-dom"
import '../App.css';
import { useState } from "react";

const Navbar = () => {

	//keeping track when to start animation:
	const [clicked, setClicked] = useState(false);
	const [clickedHome, setHomeClicked] = useState(false);
	const [clickedOne, setClickedOne] = useState(false); 
	const [clickedTwo, setClickedTwo] = useState(false); 

	const navigate = useNavigate();

	const handleClickHome = () => {
		setHomeClicked(true);
		setTimeout(()=>{
			setHomeClicked(false);
			navigate('/');
			window.scrollTo(0, 0);
		}, 670);
	}

	const handleClick = () => {
		setClicked(true);
		setTimeout(()=>{
			setClicked(false);
			navigate('/About');
			window.scrollTo(0, 0);
		}, 600);
	}

	const handleClickOne = () => {
		setClickedOne(true);
		setTimeout(()=>{
			setClickedOne(false);
			navigate('/Contact');
			window.scrollTo(0, 0);
		}, 500);
	}

	const handleClickTwo = () => {
		setClickedTwo(true);
		setTimeout(()=>{
			setClickedTwo(false);
			navigate('/faq');
			window.scrollTo(0, 0);
		}, 500);
	}	


	// console.log("clicked: " + clicked + " clickedOne? " +  clickedOne);
	
	return (
		<>
		<div className="navbar">

			<div className="navbarDogPicContainer" onClick={handleClickHome}>
				<img className="navbarDogPic" src="https://img.freepik.com/premium-photo/happy-puppy-dog-smiling-isolated-yellow-background_1028938-398070.jpg"/>

			</div>

{/* //~right of navbar */}
			<div className="navbarRight">

				<span className="outerSpanNav">
					<span className="innerSpanNav" style={{animationDelay: "1s"}} onClick={handleClick}>
						About
					</span> 
				</span>

				<span className="outerSpanNav">
					<span className="innerSpanNav" style={{animationDelay: "1.4s"}} onClick={handleClickOne}>
						Contact Us
					</span>
				</span>

				<span className="outerSpanNav">
					<span className="innerSpanNav" style={{animationDelay: "2s"}} onClick={handleClickTwo}>
						FAQs
					</span>
				</span>

			</div>
		</div>

		<div className= {clickedHome? ("homeLoader") : ("")}></div>
		<div className= {clicked? ("loaderAbout") : ("")}></div>
		<div className= {clickedOne? ("loaderOne") : ("")}></div>
		<div className= {clickedTwo? ("loaderTwo") : ("")}></div>
	</>
	)
}

export default Navbar

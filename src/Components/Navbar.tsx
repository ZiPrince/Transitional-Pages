import { useNavigate } from "react-router-dom"
import '../App.css';
import { useState } from "react";
import {useMediaQuery} from "./useMediaQuery";
import Hamburger from "./Hamburger";


interface Navbar {
	page: string;
	animationDelay: string;
	param: string;
}

const Navbar = ({setIsVisible, isVisible, pathname, setPathname}: 
	{setIsVisible: any, isVisible: boolean, pathname: string, setPathname: any}) => {

	//keeping track when to start animation/play loader screens:
	// curPage:used as CSSname 
	const [curPage, setCurPage] = useState("");

	//mapping over buttons in nav

	

	const navButtons : Navbar = [

		
	]

	const isMobile = useMediaQuery(`(max-width: ${650}px)`);

	// clicked[url] = true;
	// curPage = url;

	const navigate = useNavigate();

	const handleClick = (page: string) => {
		setCurPage(page);
		setTimeout(()=>{
			setCurPage("-");
			navigate(`/${page}`);
			window.scrollTo(0, 0);
			setIsVisible(false);
			setPathname(window.location.pathname);
		}, 670);
	}

	return isMobile?
		
			(<>
				<div className="navbarHelloPupsMobile" onClick={()=>{handleClick('')}}>
					<span className="navbarHelloPups outerSpan">
						<span className="innerSpanNav" style={{animationDelay: "0.5s"}} >
						Hello Pups 					
						</span>
					</span>

					<Hamburger navButtons={navButtons} /> 
				</div>

			</>) :

//!NOT MOBILE

			(<> <div className="navbar">

				<div className="navbarHelloPupsContainer">
					<span className="navbarHelloPups outerSpan">
						<span className="innerSpanNav" style={{animationDelay: "0.5s"}} onClick={()=>handleClick('')}>
						Hello Pups
						</span>
					</span>

				</div>

				{/* //~right of navbar */}

				<div className="navbarRight">
				{navButtons.map(navButton=> 
					(<span className="outerSpanNav">
					<span className="innerSpanNav" style={{animationDelay: navButton.animationDelay}} onClick={()=>handleClick(navButton.param)}>
						{navButton.page}
					</span> 
					</span>))}
				</div>
			</div>

			<div className={`${curPage}Loader`} ></div>
			{/* <div className= {curPage}></div> </>)  */}
			{/* ${}: not javascript brackets  */}
		</>)
}

export default Navbar

import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Link } from 'react-router-dom';




export default function Hamburger({navButtons}: {navButtons: any}) {



	const [hamburgerOpen, setHamburgerOpen] = useState(false); 

	const handleClickHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	}

	console.log("hamburger open? " +hamburgerOpen);

	

  return (<>
	<div className="hamburgerMenu">
		
		<span onClick={handleClickHamburger}>
			<FontAwesomeIcon icon={faBars} />&nbsp;&nbsp;&nbsp;
		</span>

		<div className={hamburgerOpen? "moveLeft" : "hidden"}>	
			{navButtons.map((navButton: any)=>(
				<div>
				<Link to={navButton.param}>
					<div className="outerSpanNav">
						<span className="innerSpanNav">
							{navButton.page}
						</span>
					</div>
				</Link>
			</div>))}			
		</div>	
				

				{/* <div>
					<Link to="/contact">
						<div className="outerSpanNav">
							<span className="innerSpanNav">
								Contact
							</span>
						</div>
					</Link>
				</div>

				<div>
					<Link to="/Faq">
						<div className="outerSpanNav">
							<span className="innerSpanNav">
								FAQs
							</span>
						</div>
					</Link>
				</div> */}

	
		
	  
	</div>
	</>)
}

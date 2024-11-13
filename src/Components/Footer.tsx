import { useState } from "react";
import { Link } from "react-router-dom"
import VisibilitySensor from 'react-visibility-sensor';



const Footer = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (<>
		<br/>

		<VisibilitySensor onChange={(weCanSeeIt: boolean) => {weCanSeeIt && setIsVisible(weCanSeeIt)}}>
			<div className="footerContainer">

				{/* //~left section of footer */}
		
				<div className="footerLeft"> 

					{/* we want image to appear when scrolled to: wrap around visibilitySensor component & apply onChange & ternary cdn */}
					
						{/* only set isVisible to true, if weCanSeeIt is true.
						so if we scroll away it always remain true. */}
						<Link to="/">
							<span style={{ overflowY: "hidden", position:"relative"}}>
								<div style={{
									marginLeft:"4px", 
									opacity: isVisible? 0.8 : 0,
									position: "relative",
									transform: isVisible? "translateY(0px)" : "translateY(-100px)",
									transition: 'transform 300ms linear, opacity 300ms linear',
								}}> 
									<img className="footerDogPic" src="https://img.freepik.com/premium-photo/happy-puppy-dog-smiling-isolated-yellow-background_1028938-398070.jpg"/>
								</div>
							</span>
						</Link>
					
						<br/>

				
						<div style={{ overflowY: "hidden", position:"relative"}}>
							<div className="smallTextFooter" style={{
								opacity: isVisible? 0.8 : 0,
								position: "relative",
								transform: isVisible? "translateY(-2px)" : "translateY(-90px)",
								transition: 'transform 300ms linear, opacity 300ms linear',
								width: "fit-content",
							}}>
								<a href = "https://www.linkedin.com/in/zi-wang-bb4b3169/">
									<div className="underlineFooter">
									💖From Zi💖
									</div>
								</a>
							</div>
						</div>
				</div>

				{/* //~ start of LEFT OF CONTAINER:  */}

		<div style={{overflowY: "hidden"}}>
				<div style={{
					marginLeft:"10%", 
					opacity: isVisible? 0.8 : 0,
					position: "relative",
					transform: isVisible? "translateY(0px)" : "translateY(-100px)",
					transition: 'transform 300ms linear, opacity 300ms linear',
					display: "flex",
				}}> 

				<div className="footerRight">
					Recruitment and headhunting consultancy for Executives and Managers puppers.

					{/*//~ within rightSection, 3 columns */}
					<div className="footerColumnsContainer">
					
					
							<ul>
								<li><div className="list">Our Team</div></li>
								<li><div className="list">Our Culture</div></li>
								<li><div className="list">Our Candidates</div></li>
							</ul>
						<div>
							<ul>
								<li><div className="list">Our Team</div></li>
								<li><div className="list">Our Culture</div></li>
								<li><div className="list">Our Candidates</div></li>
							</ul>			
						</div>

						<div>
							<ul>
								<li><div className="list">Our Team</div></li>
								<li><div className="list">Our Culture</div></li>
								<li><div className="list">Our Candidates</div></li>
							</ul>			
						</div>
					</div>
				</div>


					</div>
				</div>
			</div>
			</VisibilitySensor>
		</>
	)
}

export default Footer

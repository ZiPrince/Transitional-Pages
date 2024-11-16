import { Link } from "react-router-dom"
import VisibilitySensor from 'react-visibility-sensor';



const Footer = ({setIsVisible, isVisible}: {setIsVisible: any, isVisible: boolean}) => {

	return (<>
		<br/>

		<VisibilitySensor onChange={(weCanSeeIt: boolean) => {weCanSeeIt && setIsVisible(weCanSeeIt)}}>
			<div className="footerContainer">

				{/* //~left section of footer */}
		
				<div className="footerLeft"> 

					{/* we want image to appear when scrolled to: wrap around visibilitySensor component & apply onChange & ternary cdn */}
					
						{/* only set isVisible to true, if weCanSeeIt is true.
						so if we scroll away it always remain true. */}
						<div style={{
									opacity: isVisible? 0.8 : 0,
									position: "relative",
									transform: isVisible? "translateY(0px)" : "translateY(-100px)",
									transition: 'transform 300ms linear, opacity 300ms linear',
									width: "83vw",
								}}> 
							<Link to="/">
								<img onClick={()=> {window.scrollTo(0, 0)}} className="footerDogPic" src="https://img.freepik.com/premium-photo/happy-puppy-dog-smiling-isolated-yellow-background_1028938-398070.jpg"/>
							</Link>
					
							<br/>
							<Link to = "https://www.linkedin.com/in/zi-wang-bb4b3169/">
								<div className="underlineFooterZi">
									💖 Made by Zi 💖
								</div>
							</Link>
						</div>
				</div>

				{/* //~ start of RIGHT SIDE:  */}

				<div className="footerRight">

					<div style={{
						opacity: isVisible? 0.8 : 0,
						transform: isVisible? "translateY(0px)" : "translateY(-70px)",
						transition: 'transform 500ms ease-out, opacity 500ms ease-out',
						width: "100%",
					}}> 
						
					<div style={{paddingBottom: "1.5vw"}}>Puppers Consultancy </div>
					{/*//~ within rightSection, 3 columns */}
						<div className="footerColumnsContainer">
							<div className="eachColumn">
								<div className="list">Our Team</div>
								<div className="list">Culture</div>
								<div className="list">Candidates</div>
							</div>

							<div className="eachColumn">
								<div className="list">Our Team</div>
								<div className="list">Culture</div>
								<div className="list">Candidates</div>		
							</div>

							<div className="eachColumn">
								<div className="list">Our Team</div>
								<div className="list">Culture</div>
								<div className="list">Candidates</div>
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

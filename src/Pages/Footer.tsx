import { Link } from "react-router-dom"

const Footer = () => {
  return (<>
	<br/>
	<div className="footerContainer">
		{/* //~left section of footer */}
		<div className="footerLeft"> 
			<Link to="/">Puppers Home</Link>
			<div> 
				<img className="footerPic" src="https://img.freepik.com/premium-photo/happy-puppy-dog-smiling-isolated-yellow-background_1028938-398070.jpg"/>
			</div>
			<div className="ziLinkedinFooter">
				<Link to="https://www.linkedin.com/in/zi-wang-bb4b3169/">
					<div className="underlineLinkedin">
						Made by Zi&nbsp;
						<img style={{width:"28px", transform:"translateY(7px)"}}
						src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg"/>
					</div>
				</Link>
			</div>
		</div>

		<div className="footerRight">
			Recruitment and headhunting consultancy for Executives and Managers specialising in Data/ Innovation/ Digital/ Marketing/ Communication.

			{/*//~ within rightSection, 3 columns */}
			<div className="footerColumnsContainer">
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
	</>
  )
}

export default Footer

import '../index.css';

const Home = () => {
	return (<>
	<div className="outerContainer">
		{/* flexbox, into 2 sections:left and right. 
		right section: further divided into 2 sections. 
		the second section is then divided vertically.  */}

		<div className="homeContainer">
			Build the  <span className="bestTeams"> best teams</span>  with great puppers 
			<div className="homeSmallText">
			Recruitment of managers, experts and senior executives in Data, Innovation, Digital, Marketing and Communication.
			</div>
		</div>

		<div className="homePhotosContainer">
			<img className="dogBig1img" src="https://www.photocase.com/photos/4599074-vertical-close-up-of-cute-jack-russell-dog-wearing-eye-wear-working-at-home-office-on-computer-technology-and-pets-indoors-photocase-stock-photo-large.jpeg"/>
			<div className="homeSmallDogPhotosVertical">
				<img className="dogSmall1" src="https://thumbs.dreamstime.com/b/welsh-pembroke-corgi-puppy-nature-vertical-portrait-posing-beach-142857765.jpg"/>
				<img className="dogSmall2Bottom" src="https://thumbs.dreamstime.com/b/welsh-pembroke-corgi-puppy-nature-vertical-portrait-posing-beach-142857765.jpg"/>
			</div>
		</div>
	</div>

	</>)
}

export default Home

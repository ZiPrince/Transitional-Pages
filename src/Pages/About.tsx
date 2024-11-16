import '../index.css';
import { useEffect, useState } from 'react';

const About = () => {
	

	const arrayofWords = ["About", "our", "best", "puppers"]

	//switch imgs every 5 seconds

	const aboutImages = [ 
				"https://thumbs.dreamstime.com/b/welsh-pembroke-corgi-puppy-nature-vertical-portrait-posing-beach-142857765.jpg",
				"https://www.dogster.com/wp-content/uploads/2024/03/Golden-retriever-puppy-chewing-on-toy_Photology1971_Shutterstock.jpg"
			]
	
	const [index, setIndex] = useState(0); 
	const [imageAnimation, setImageAnimation] = useState("");

	useEffect(() => { 
		console.log("start");
		imageRevealFn();
	}, []); 

	
	const imageRevealFn = () => {
		setImageAnimation("imageReveal");
		//calls imageHide, AFTER 5 seconds. 
		setTimeout(() => {
			console.log('call imageHidesFn');
			imageHidesFn();
		},5000);
	}

	const imageHidesFn = () => {
		setImageAnimation("imageHides");
		setTimeout(() => {
			imageRevealFn();
			
			setIndex((prevIndex) => {
				if (prevIndex === 1) 
				return 0;
				return 1;
			})
	
		}, 1200);
	}



	// const onClickChangeCss = (className : string) => {
	// 	setImageAnimation(className);
	// }

		
	return (<>

					
	
		<div className="aboutContainer">
			{/* flexbox, into 2 sections:left and right. */}
			{/* //~LEFT */}
			<div className="aboutPhotosContainer">
				<img className={`${imageAnimation} aboutDogImg`} src={aboutImages[index]} />
			</div>

			{/* //~RIGHT */}

			<div className="aboutText">

				<div className="homeSmallTextOuterContainer">
					<div className="aboutSmallText" >
						... why choose us? 
					</div>
				</div>
				<br/>

			{arrayofWords.map((word, i) => (
					<>
					<span className="outerSpanHomeText"><span className="innerSpanHomeText" style={{animationDelay: `${i*0.2}s`}}>
						<div className= {(word ==="best"|| word==="team")? "underlinedYellow aboutBigText" : "aboutBigText"}>
							{word}&nbsp;
						</div>
					</span></span></>))}

				<div className="homeSmallTextOuterContainer">
					<div className="aboutSmallText">					
						... with their enthusiasm for routines, our dogs encourage 
						regular walks, outdoor activities, and even social interactions that can
						help keep people active and structured. 
					</div>
				</div>
			</div>
		</div>	
	</>)
}

export default About
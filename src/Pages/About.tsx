import '../index.css';
import { useEffect, useState } from 'react';

const About = () => {

	const arrayofWords = ["About", "our", "best", "puppers", "..."]

	//switch imgs every 5 seconds

	const imagesLeft = [
				"https://www.photocase.com/photos/4599074-vertical-close-up-of-cute-jack-russell-dog-wearing-eye-wear-working-at-home-office-on-computer-technology-and-pets-indoors-photocase-stock-photo-large.jpeg",
				"https://wallpapers.com/images/featured/cute-puppy-i85e6c4pqelymxsw.jpg"
			]

	const imagesRight = [ 
				"https://thumbs.dreamstime.com/b/welsh-pembroke-corgi-puppy-nature-vertical-portrait-posing-beach-142857765.jpg",
				"https://www.dogster.com/wp-content/uploads/2024/03/Golden-retriever-puppy-chewing-on-toy_Photology1971_Shutterstock.jpg"
			]
	const imagesRight2 = [
		"https://thumbs.dreamstime.com/b/welsh-pembroke-corgi-puppy-nature-vertical-portrait-posing-beach-142857765.jpg",
		"https://img.freepik.com/premium-photo/sneaky-cat_989332-3214.jpg"	]
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
		console.log("imageRevealFn");
	}

	const imageHidesFn = () => {
		setImageAnimation("imageHides");
		setTimeout(() => {
			console.log("call imageRevealFn");
			imageRevealFn();
			
			setIndex((prevIndex) => {
				if (prevIndex < imagesLeft.length - 1) 
				return prevIndex + 1;
				return 0;
			})
	
		}, 1200);
		console.log('imageHidesFn');
	}



	// const onClickChangeCss = (className : string) => {
	// 	setImageAnimation(className);
	// }

		
	return (<>
	
		<div className="aboutContainer">
			{/* flexbox, into 2 sections:left and right. 
			right section: further divided into 2 sections. 
			the second section is then divided vertically.  */}

			<div className="title">
				{arrayofWords.map((word, i) => (
					<><span className="outerSpanHomeText">
					<span className="innerSpanHomeText" style={{animationDelay: `${i*0.2}s`}}>
						{word}
					</span></span>&nbsp;</>))}

				<span className="homeSmallTextOuterContainer">
					<span className="homeSmallText">
						Dogs can be surprisingly productive companions, bringing unique energy and motivation 
						to their owners' lives. With their enthusiasm for routines, dogs encourage regular walks, outdoor activities, and even social interactions that can help keep people active and structured. 
						Beyond physical exercise, dogs are natural learners and workers, making them skilled in tasks like 
						herding, therapy, search and rescue, and even assisting with disabilities. Their productivity also 
						extends to providing emotional support, reducing stress, and improving mental health, which can 
						increase a person’s focus and productivity. In countless ways, dogs contribute positively and 
						purposefully to daily life.	
					</span>
				</span>
			</div>

			<div className="homePhotosContainer">
				<img className= {`${imageAnimation} aboutDog1img`} src={imagesLeft[index]}/>
					<img className={`${imageAnimation} dogSmall1`} src={imagesRight[index]} />
					<img className={`${imageAnimation} dogSmall2`}  src={imagesRight2[index]}/>
			</div>
		</div> 
	</>)
}

export default About
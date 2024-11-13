import '../index.css';
import { useEffect, useState } from 'react';

const Home = () => {

	const arrayofWords = ["Build", "the", "best", "team", "with", "great", "puppers"]

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
	
		<div className="outerContainer">
			{/* flexbox, into 2 sections:left and right. 
			right section: further divided into 2 sections. 
			the second section is then divided vertically.  */}

			<div className="homeContainerLeft">

				{arrayofWords.map((word, i) => (
					<><span className="outerSpanHomeText">
					<span className="innerSpanHomeText" style={{animationDelay: `${i*0.2}s`}}>
					<div className= {(word ==="best"|| word==="team")? "underlinedYellow" : ""}>
						{word}
					</div></span>&nbsp;</span></>))}

				<span className="homeSmallTextOuterContainer">
					<span className="homeSmallText">
						Recruitment of managers, experts and senior executives in Data, Innovation, Digital, Marketing and Communication.
					</span>
				</span>
			</div>

			<div className="homePhotosContainer">
				<img className= {`${imageAnimation} dogBig1img`} src={imagesLeft[index]}/>
				<div className="homeSmallDogPhotosVertical">
					<img className={`${imageAnimation} dogSmall1`} src={imagesRight[index]} />
					<img className={`${imageAnimation} dogSmall2 translatePic`}  src={imagesRight2[index]}/>
				</div>
			</div>
		</div> 

		<hr  style={{
			marginTop: "9%",
			backgroundColor: 'grey',
			height: .5,
			width: "96vw",
		}}/>
	</>)
}

export default Home

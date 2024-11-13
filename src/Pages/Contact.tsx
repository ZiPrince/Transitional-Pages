
import '../index.css';
import { useEffect, useState } from 'react';

const Contact = () => {

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



		
	return (<>
	
		<div className="contactContainer">
		
			<div className="title">
				
				<span className="outerSpanHomeText shiftRight">
					<span className="innerSpanHomeText shiftRight">
						Spontaneous
					</span>&nbsp;
				</span>
				<div>
					<span className="outerSpanHomeText shiftRight">
					<span className="innerSpanHomeText shiftRight">
						Contact
					</span>&nbsp;</span>
				</div>
			</div>

			<div className="outerSpanContactForm"><span className="innerSpanContactForm">
				<form className="formFlex">
					<div className="formColumn">
						<label>First name *</label><br/>
						<input type="text" name="fname"/><br/>

						<label>Email *</label><br/>
						<input type="text" name="text"/><br/>

						<label>City *</label><br/>
						<input type="text" name="city"/><br/>
					</div>
					<div className="formColumn">
						<label>Last name *</label><br/>
						<input type="text" name="lname"/><br/>
						
						<label>Phone number </label><br/>
						<input type="text" name="number"/><br/>
						
						<label>Zipcode </label><br/>
						<input type="text" name="zip"/><br/>

						<label>Message *</label><br/>
						<textarea name="msg"/><br/>
					</div>
				</form>
			</span></div>

			<div className="buttonContainer">
				<button>Submit</button>
			</div>
		</div>
	

	</>)
}

export default Contact
  


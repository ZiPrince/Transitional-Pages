import '../index.css';
import '../App.css';
import { useEffect, useState } from 'react';
import Box from '../Components/Box';


const Faq = () => {
	const arrayofWords = ["Your", "next", "pupper", "may", "be", "here!"];
	const jobBoxData = [
		{
			name: "IT Support - International", 
			description: "IT Support International provides comprehensive technical support services to clients worldwide, ensuring efficient IT operations, troubleshooting, and maintenance to optimize business productivity and reduce downtime."
		},
		{
			name: "Maintenance Manager",
			description: "A Maintenance Manager oversees the upkeep of facilities, equipment, and systems, ensuring they operate efficiently and reliably, while coordinating repair schedules and preventive maintenance to minimize disruptions."
		},
		{
			name: "",
			description: ""
		}
	];

	return (
	  <div className="faq">
			<div className="faqWordContainer">
				{arrayofWords.map((word, i) => (
					<><span className="outerSpanHomeText">
						<span className="innerSpanHomeText" style={{animationDelay: `${i*0.2}s`}}>
							<div>
								{word}
							</div>
						</span>&nbsp;</span></>))}

						<div className="jobBoxContainer">
							<Box jobBoxData={jobBoxData[0]}/>
							<Box jobBoxData={jobBoxData[1]}/>
							<Box jobBoxData={jobBoxData[2]}/>
						</div>

						
						
			</div>
		</div>
	)
  }
  
  export default Faq
  

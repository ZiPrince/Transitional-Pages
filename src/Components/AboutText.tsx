import React from 'react'

const AboutText = () => {
	const [movement]  = useSpring(
		()=> ({ 
			to: {y: "100" }
		})
	)
  return (
	<div>
	  
	</div>
  )
}

export default AboutText

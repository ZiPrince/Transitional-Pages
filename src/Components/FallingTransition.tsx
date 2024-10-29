import { useSpring, animated } from '@react-spring/web'

const FallingTransition = () => {
	const [movement]  = useSpring(
		()=> ({ 
			from: {y: "-100vh"},
			to: {y: "0" }
		})
	)
  return (
	<animated.div className="grey" style={movement}>
	</animated.div>
  )
}

export default FallingTransition

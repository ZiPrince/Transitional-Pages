import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		const matchQueryList = window.matchMedia(query);

		//this const is an object with 3 paras: media, matches, and onchange
		console.log(matchQueryList.matches);
		console.log(query);
		//query is just the css you set.
		function handleChange(e: any) {
			setMatches(e.matches);
		}
		
		matchQueryList.addEventListener("change", handleChange);
		//addEventListener takes an event,such as a "click"/"change", and the function that 
		//runs when event happens

		return () => {
			matchQueryList.removeEventListener("change", handleChange);
		  };
		  //clean up function prevents memory leaks
		}, [query]);
	return matches;
}


//~mobile ends

// use on pages: 
// const isMobile = useMediaQuery("(max-width: 650px)");

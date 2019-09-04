import {useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode(key, initalValue){

	// set state to be user input, setting state using a custom hook
	const [darkMode, setDarkMode] = useLocalStorage(key, initalValue);

	// Setup state monitoring
	useEffect(() => {
		
		// darkMode === true
		if(darkMode){
			const body = document.querySelector.apply('body');
			body.classList.add('dark-mode');
		}
		else {
			const body = document.querySelector('body');
			body.classList.remove('dark-mode');
		}
	}, [ darkMode ]);

	return [ darkMode, setDarkMode ];
}

export default useDarkMode;
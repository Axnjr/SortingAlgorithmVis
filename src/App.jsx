import './styles/App.css';
import VerticalDivs from "./ArrayBarsGenrator"
import { useState } from 'react';
import Header from './Header';

export default function SortVisulizer(){
    const [arrLen,setArrLen] = useState(20)  
	const [genClicked,setGenClicked] = useState(false)
	const [AnimationInProgressBoolean,setAnimationInProgressBoolean] = useState(false)
	const [numArray,setNumArray] = useState([])
	const [style,setStyle] = useState(1)
	var tempArray = numArray , speed = arrLen > 25 ? 200 : arrLen*10 ;

    return (
        <>
		<main>
		<Header 
			arrLen = { arrLen}
			setArrLen ={ setArrLen}
			setAnimationInProgressBoolean = {setAnimationInProgressBoolean}
			setStyle = {setStyle}	
			speed = {speed}
			style = {style}
			tempArray = {tempArray}
			numArray = {numArray}
			setNumArray = {setNumArray}
			setGenClicked = {setGenClicked}
			AnimationInProgressBoolean = {AnimationInProgressBoolean}
		/>
		<VerticalDivs arrLen={arrLen} genClicked={genClicked} tempArray={numArray} />
		</main>
		<div className='rotate'>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
			</svg> 
			<h1>Rotate your device Please </h1>
		</div>
        </>
    )
}
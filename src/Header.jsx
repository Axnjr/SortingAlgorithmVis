import React from 'react'
import { Bubble } from './Algorithms/Bubble';
import { Quick } from './Algorithms/Quick';
import { Merge } from './Algorithms/Merge';

export default function Header({ // props 
    setArrLen,
    setAnimationInProgressBoolean,
    setStyle,
    setNumArray,
    setGenClicked,
    arrLen,
    style,
    speed,
    tempArray,
    numArray,
    AnimationInProgressBoolean }) {

        function GenerateArray(){
            document.querySelectorAll(".array_elements").forEach(item => { item.style.backgroundColor = "white" })
            setGenClicked(true)
            if(arrLen===0){   alert("Enter Array Length To Continue 🙏🏼")   }
            var temp_arr = []
            for(let i = 0 ; i < arrLen ; i++ ){ temp_arr[i] = Math.floor(Math.random()*100+5)  }
            setNumArray(temp_arr)
        }

  return (
    <>
        <header>

            <div>
                <label><h2>Enter array length ( min : 5 | max : 50 ) : </h2></label> 
                <input type="number" min={5} max={50} 	
                    onChange={(e)=>{
                        if(e.target.value > 50 || e.target.value < 5){ 
                            alert(`Please provide array greater than 5 and smaller than 50 , you entered ${e.target.value} .`)
                        }
                        setArrLen(e.target.value)
                    }} disabled={AnimationInProgressBoolean}>
                </input>
            </div>

            <h2 onClick={GenerateArray}>Generate Array</h2>

            <button onClick={()=>{ 
                // params are in the file
                Bubble(arrLen,speed,tempArray,numArray,setNumArray,setAnimationInProgressBoolean); 
                setAnimationInProgressBoolean(!AnimationInProgressBoolean)
            }} disabled={AnimationInProgressBoolean} >
                Bubble Sort
            </button>

            <button onClick={()=>{
                // params are in the file
                Quick(arrLen,speed,tempArray,setNumArray,setAnimationInProgressBoolean)
                setAnimationInProgressBoolean(!AnimationInProgressBoolean)
            }} disabled={AnimationInProgressBoolean} >
                Quick Sort
            </button>

            <button onClick={()=>{
                // params are in the file
                Merge(arrLen,speed,tempArray,numArray,setNumArray,setAnimationInProgressBoolean);
                setAnimationInProgressBoolean(!AnimationInProgressBoolean)
            }} disabled={AnimationInProgressBoolean} >
                Merge Sort
            </button>

            <button onClick={() => {
                setStyle(s => s + 1)
                if(style===1){
                    document.querySelector(".array_container").style.alignItems = "flex-end"
                }
                else if(style===2){
                    document.querySelector(".array_container").style.alignItems = "center"
                }
                else if(style>=3){
                    setStyle(s => s*0)
                    document.querySelector(".array_container").style.alignItems = "flex-start"
                }
            }}>Styles</button>

        </header>
    </>
  )
}

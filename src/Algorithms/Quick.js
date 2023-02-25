import { ChangeColor , ExecuteExitAnimation } from "../AnimationHelpers"
/**
 * 
 * @param {Number} arrLen = length of array given by the user .
 * @param {Number} speed = speed of execution for setTimout's and setInterval's .
 * @param {Object|Array} tempArray = temporary array to store the real array ( numArray ) bcuz array state has to be reaplaced not modified / updated .
 * @param {Function} setNumArray = callback to set the new value of numArray
 * @param {Function} setAnimationInProgressBoolean = callback to set / toggle the AnimationInProgressBoolean which is used to disable button's while animating .           
 * 
 */
export const Quick = (arrLen,speed,tempArray,setNumArray,setAnimationInProgressBoolean) => { 

    var leftArray = [],
        rightArray = [],
        pivot = tempArray[arrLen-1],
        clicks = 0
    ;

    ChangeColor(tempArray.indexOf(pivot),"blue") ; ChangeColor(0,"yellow") ;

    setTimeout(() => {

        var pivotIndex = tempArray.indexOf(pivot)
        let idq1 = setInterval(() => {

            if( tempArray[clicks] > pivot ){
                ChangeColor(clicks+1,"lime")         // if grt then lime
                rightArray.push(tempArray[clicks])  
                let temp = tempArray[clicks]        
                delete tempArray[clicks]            
                tempArray.push(temp)                
            }

            else{ 
                ChangeColor(clicks+1,"yellow")      // if sml then yellow
                leftArray.push(tempArray[clicks])   
            }

            ChangeColor(pivotIndex,"blue")

            pivotIndex = [...tempArray.filter((ele) => { return ele !== undefined || "empty" })].indexOf(pivot)
            setNumArray([...tempArray.filter((ele) => { return ele !== undefined || "empty" })])

            clicks++

            if(clicks >= arrLen ){

                ChangeColor(pivotIndex,"blue")

                ExecuteExitAnimation(true,"yellow",1/arrLen*10,pivotIndex,arrLen)    ;

                ExecuteExitAnimation(false,"yellow",1/arrLen*10,pivotIndex,arrLen)   ;

                setNumArray([...leftArray.sort((a,b)=>a-b),...rightArray.sort((a,b)=>a-b)])

                setAnimationInProgressBoolean(x => !x)

                clearInterval(idq1)	
            }

        },speed)

    },100)

}
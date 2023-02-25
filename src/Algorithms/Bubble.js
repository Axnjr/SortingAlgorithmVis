import { ChangeColor , ExecuteExitAnimation } from "../AnimationHelpers"
/**
 * @param {Number} arrLen = length of array given by the user .
 * @param {Number} speed = speed of execution for setTimout's and setInterval's .
 * @param {Object|Array} tempArray = temporary array to store the real array ( numArray ) bcuz array state has to be reaplaced not modified / updated .
 * @param {Object|Array} numArray = the real array state .
 * @param {Function} setNumArray = callback to set the new value of numArray
 * @param {Function} setAnimationInProgressBoolean = callback to set / toggle the AnimationInProgressBoolean which is used to disable button's while animating .           
 */
export const Bubble = (arrLen,speed,tempArray,numArray,setNumArray,setAnimationInProgressBoolean) => {

    let clicks = 0

    ChangeColor(0,"lime",false) 

    let idb = setInterval( () => {

        ChangeColor(clicks,"lime",true)

        for(let i = 0 ; i <= clicks ; i++ ){
            for(let j = 0 ; j < arrLen ; j++ ){  
                if(tempArray[i] < tempArray[j]){ 
                    [tempArray[i],tempArray[j]] = [tempArray[j],tempArray[i]]
            }}
            setNumArray([...numArray,tempArray])
        }

        clicks++

        if( clicks >= arrLen ){ 
            clearInterval(idb)
            setAnimationInProgressBoolean(x => !x)
            setTimeout(() => { ExecuteExitAnimation(true,"yellow",10,arrLen,arrLen) },200)
        }

    },speed)
    
}
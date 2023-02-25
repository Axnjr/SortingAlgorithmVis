import { ChangeColor , ExecuteExitAnimation } from "../AnimationHelpers"

/**
 * @param {Number} arrLen = length of array given by the user .
 * @param {Number} speed = speed of execution for setTimout's and setInterval's .
 * @param {Object|Array} tempArray = temporary array to store the real array ( numArray ) bcuz array state has to be reaplaced not modified / updated .
 * @param {Function} setNumArray = callback to set the new value of numArray
 * @param {Function} setAnimationInProgressBoolean = callback to set / toggle the AnimationInProgressBoolean which is used to disable button's while animating .           
 **/

export const Merge = (arrLen,speed,tempArray,numArray,setNumArray,setAnimationInProgressBoolean) => { 
    let l = tempArray.length , midsP = [] , midsEle = [] ;
    while(l > 3){  l = Math.floor(l/2) ;  midsP.push(l)  } 
    let m = midsP.length
    for(let i = 1 ; i < m ; i++){ midsP.push( tempArray.length-midsP[i] ) }
    midsP = midsP.sort((a,b)=>a-b) // final array conatining indices of all major pivots .

    midsP.forEach(element => {     // glowing all pivots in blue color .
        ChangeColor(element,"blue")  
        midsEle.push( tempArray[element] )
    });

    setTimeout(() => {
        var clicks = 0 , idm = setInterval(() => {

            let 
                sortedLeftArr = tempArray.slice(0,midsP[clicks]).sort((a,b)=>a-b) ,
                helpingPointer = 0 ,
                unsortedRightArr = tempArray.slice(midsP[clicks],tempArray.length) ,  
                idm1 = setInterval(() => {

                    ChangeColor( tempArray.indexOf(sortedLeftArr[helpingPointer]) , "yellow" )
                    midsP.forEach(element => {  
                        ChangeColor(element,"blue")  
                    });
                    helpingPointer++
                    if( helpingPointer >= sortedLeftArr.length ){ clearInterval(idm1) }

                }, 10);
            ;

            setNumArray([...sortedLeftArr,...unsortedRightArr])
            clicks++

            if( clicks >= midsP.length ){ 

                setNumArray(x => x = numArray.sort((a,b)=>a-b))
                setAnimationInProgressBoolean(x => !x)
                ExecuteExitAnimation(true,"yellow",10,arrLen,arrLen);
                clearInterval(idm) 

            }

        }, speed);

    }, speed);
    
}
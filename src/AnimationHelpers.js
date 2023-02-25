export const ChangeColor = (index,color,nextIndexBoolean) => {
    // 1ms almost neglible time delay to avoid lagging reason : -> 
    // https://stackoverflow.com/questions/22051209/how-does-setinterval-and-settimeout-work
    setTimeout(()=>{ 
        if(document.getElementById(`vertical_div${index}`)){
            document.getElementById(`vertical_div${index}`).style.backgroundColor = color 
        }
        if(nextIndexBoolean && document.getElementById(`vertical_div${index+1}`)){
            document.getElementById(`vertical_div${index+1}`).style.backgroundColor = "red" ;
        }
    },1) 
}


export const ExecuteExitAnimation = (direction,color,speed,untill,arrlen) => { // direction true then straight else reverse .
    let i = direction ? 0 : arrlen - 2 , exit = setInterval(() => {
        document.getElementById(`vertical_div${i}`).style.backgroundColor = color ;
        if(direction){ 
            i++ 
            if( i >= untill ){ 
                clearInterval(exit) 
            }
        }
        else{ 
            i-- 
            if( i <= untill ){ 
                clearInterval(exit) 
            }
        }
    }, speed );
}
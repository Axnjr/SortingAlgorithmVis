export default function VerticalDivs({arrLen,tempArray,genClicked}){
    if(genClicked){
        return 	(
        <div className='array_container' >{
        tempArray.map((num,id) => { 
            if(isNaN(Number(num))){
                num = "END" 
            }
            return (
                <div key={id} id={`vertical_div${id}`} className='array_elements' 
                style = {{ 
                    height: num + 3 + 'mm',
                    width: 160 / arrLen + 'mm',
                    margin:10 / arrLen + 'mm',
                }}>
                    {num}
                </div>
            )})}
        </div>
        )
    }
    else{
        return 	(
        <div className='array_container' >
            <h2 style={{
                letterSpacing:"0.01vw",
                fontWeight:"100",
                fontSize:"2rem",
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)"
            }}>
                Genearte Array to start 🙂 
            </h2>
        </div>
        )
    }
}

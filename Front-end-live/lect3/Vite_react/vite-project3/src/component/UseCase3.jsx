import { useState } from "react";

function UseCase3() {
    const [Flag, SetFlag]=useState(false)
    const handleClick=()=>{
        SetFlag(!Flag)
    }



    return ( 

        <div className="mt-2 container" style={{border:'2px solid green'}}>{Flag?<p>My Data Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente hic et nobis.</p>:''}
            
            <button onClick={handleClick} className="btn btn-secondary">{Flag?'hide':'Show'}</button>

        </div>


     );
}

export default UseCase3;
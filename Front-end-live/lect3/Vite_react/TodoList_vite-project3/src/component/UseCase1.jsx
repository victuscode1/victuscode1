import { useState } from "react";


function UseCase1(){

    // let name="Skill Academy";     This is unable to chnage the in name
    // const ChangeName=()=>{
    //  console.log("before ChangeName", name);
    //  name="Skill Academy updated";
    //  console.log("after ChangeName", name);
     
    // };

    const [Fname, setName] = useState("Skill Academy");
    const ChangeName=()=>{
        setName("Updated Skill Academy");
    }


    return (
        <div><h3> Use Case 1 component: {Fname}</h3>
        <button onClick={ChangeName}> Click To Change</button>
        
        </div>

    );
}

export default UseCase1;
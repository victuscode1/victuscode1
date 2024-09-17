import { useState } from "react";

function UseCase4() {
    const [User,SetUser]= useState({name:'Ram',email:'ram@gmail.com', country:'Bharat'});
    const Change=(name, email, country)=>{
        SetUser({name, email, country});}
    

    return ( 
        <div>
            <p>Welcome {User.name}</p>
            <ul>
                <li>{User.email}</li>
                <li>{User.country}</li>
            </ul>

            

            <button onClick={()=>Change('Ravi','ravi@gmail.com', 'India')}>Change</button>

        </div>



     );
}

export default UseCase4;

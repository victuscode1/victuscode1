import { useState } from "react";

function UseCase5() {
    const [Users, SetUsers]= useState(
        [{id:1, name:'Rushi', email:'rushi@gmail.com'},
            {id:2, name:'Rashi', email:'rashi@gmail.com'},
            {id:3, name:'Rushali', email:'rushali@gmail.com'},
            {id:4, name:'Rishi', email:'rishi@gmail.com'},
            {id:5, name:'Rishika', email:'rishika@gmail.com'},]);
            const addData=(id, name, email)=>{
                SetUsers([...Users, {id, name, email}])
            }
    
    
    return ( 
        <div>
            <h3>User's Data</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={()=>addData(6,'Hanuman', 'Jayshiram@gmail.com')}>ADD New Data</button>
        </div>
        
    );
}

export default UseCase5;
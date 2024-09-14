
import './App.css';
import Header from "./component/header";
import slider from "./component/slider";
function App() {

  const name="Rushikesh";
  const loggedIn=true;
const user= {id:1,name:"Rushikesh", email:"rushibawane@gmail.com",contry:"India"}
const array=[
  {id:1, name:rani},
  {id:2, name:Shakti}, 
  {id:3, name:Prema}, 
  {id:4, name:Bharti}
]
  return (
    <div className="App">
      <h1>Hello world</h1>
     <button>{loggedIn ? 'logout':'login'}</button>
<p> {user.id}, {user.name}, {user.email}, {user.contry}</p>

      <h2> Welcome {name}</h2>
      <Header/>
      <slider/>
      <table>
       <thead> <tr><th>Id</th><th>Name</th></tr></thead>
       <tbody>
       { array.map(item=>(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
       ))
 } 
 </tbody>
 </table>

        
    </div>
  );
}

export default App;

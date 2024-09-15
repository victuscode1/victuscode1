import UseCase1 from "./component/UseCase1"



function App() {
 let name="Skill Academy";
 const ChangeName=()=>{
  console.log("before ChangeName", name);
  name="Skill Academy updated";
  console.log("after ChangeName", name);
  
 };


  return (

      <div className='container'>
       <h1> Hello world </h1>
       <UseCase1/>
      </div>
      

  
  )
}

export default App

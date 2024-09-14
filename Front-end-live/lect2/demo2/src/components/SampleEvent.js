function sampleEvent() {

   const handleclick=()=> {
        alert("button Click"); 
    }
    return ( 
        <div> 
            <button onClick={handleclick}> Alert </button>
            <button onClick={()=>alert("Triggered Click")}> Click ME </button>


        </div>

     );
}

export default sampleEvent;

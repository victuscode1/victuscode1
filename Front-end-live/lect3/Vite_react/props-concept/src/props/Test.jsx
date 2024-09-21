function Test(props) {
    return ( 
        <div className="my-2 p-2" style={{border:'2px solid yellow'}}>
<h1>Test compo</h1>
<button onClick={props.increment}>Click For Increment</button>
        </div>


     );
}

export default Test;
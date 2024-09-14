
import './mystyle.css'; 




function CSSdemos() {

  const mystyle={
      height:'150px',
      width:'150px',
      backgroundColor:'red'
  }
  return (
    <div className="App">
      <style> {/*  Internal Css  */}
{`
        .container{
          
          background-color:orange;
          widht:80px;
          height:50px;
          padding:20px;
          shadow:3px 1px 1px;

        }

        `}

      </style>
      <h1>Sample page</h1>

      <h2 style={{backgroundColor:'blue',color:'white', padding:'5px'}}>my sample</h2> {/* inline css */}
      <div style={mystyle}>Internal CSS</div>
      <div className='container'>My container</div>

    </div>
  );
}

export default CSSdemos;

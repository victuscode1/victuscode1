import MyImg from './props/MyImg';
import Test from './props/Test';
import Parent from "./props/parent"
import {useState} from "react";


function App() {
  const [count, setcount]=useState(0);
  const increment=()=>{
    setcount(count+1);
  }

  const array=[
    'https://www.google.com/imgres?q=car%20model&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61Rx9tHudUL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FSky-Lamborghini-Die-cast-Birthdays-Decorations%2Fdp%2FB0CB6SF53Q&docid=WtIwpRQamZnm9M&tbnid=MgXgRsbxw37WzM&vet=12ahUKEwj26-uJxtOIAxWV1zgGHeKyBrMQM3oECBoQAA..i&w=1500&h=1175&hcb=2&ved=2ahUKEwj26-uJxtOIAxWV1zgGHeKyBrMQM3oECBoQAA',
     'https://www.google.com/imgres?q=car%20model&imgurl=https%3A%2F%2Fparkplus-prd-cdn-video-upload.parkplus.io%2Fproduction%2Fvehicle%2Fpublic%2F5426319-xuv700-exterior-right-front-thre-b600a088-4771-4d0e-b500-b7c9126a876b.jpg&imgrefurl=https%3A%2F%2Fparkplus.io%2Fnew-cars&docid=QtwOT8pR97lweM&tbnid=Oa7VqWtqCp6M8M&vet=12ahUKEwj26-uJxtOIAxWV1zgGHeKyBrMQM3oECBYQAA..i&w=666&h=375&hcb=2&ved=2ahUKEwj26-uJxtOIAxWV1zgGHeKyBrMQM3oECBYQAA', 
     'https://www.google.com/imgres?q=car%20model&imgurl=http%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2020%2F12%2FAN%2FXS%2FGC%2F117049866%2F41pxxcka4ll.jpg&imgrefurl=https%3A%2F%2Fm.indiamart.com%2Fproddetail%2Falloy-car-model-kids-toys-gift-for-children-22911883762.html&docid=1e4QKTPAb4aYgM&tbnid=chSM0ZpkLHFJ0M&vet=12ahUKEwj26-uJxtOIAxWV1zgGHeKyBrMQM3oECFYQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwj26-uJxtOIAxWV1zgGHeKyBrMQM3oECFYQAA'
  ]

  return (
 

    <div className="container my-2 p-2" style={{border:'2px solid green'}}>
      <h3>App Compo:{count}</h3>
     
     <Parent/>


     {/* Passing Function as a props  */}

     <Test increment={increment}/>
{
  array.map((url)=>{
  <MyImg url={url}/>
})
}

    </div>
    
  
  )
}

export default App;

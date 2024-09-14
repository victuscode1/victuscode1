import React from 'react'

export default function Mainbar() {

    // javascript object style 
    // ctr+f for find and replace the code of occurences and changes all occurences on selecting that text only
    const bgcolorP = { 
        backgroundColor: 'pink',
        color: 'white',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px'
    }  
  return (
    <div>
        <h1 style={{color:'yellowgreen', backgroundColor:'blue' }}>
            thisi is heading
        </h1> {/*inline style */}

        <p style={bgcolorP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid velit cumque ex corrupti laudantium deserunt dolore omnis tempore laborum amet pariatur facere nihil odio ullam odit hic dolor earum.</p>
        <p className="styp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam tempora vel porro aperiam maxime a facilis, laudantium sapiente. Possimus itaque, soluta provident minima labore impedit ea? Voluptatum sunt non sint commodi tempore atque laboriosam, debitis veritatis repudiandae reprehenderit qui doloribus omnis officiis possimus vel id quasi dolore quia. Placeat voluptatibus, earum in aliquam porro aut eum cupiditate tempora eos quia sit facere nemo culpa, similique eaque ex nihil soluta neque sunt consectetur, unde libero sequi obcaecati inventore? Explicabo fugiat ab impedit commodi velit rerum facilis repellat amet, sed at doloribus nam modi mollitia maiores id beatae excepturi corporis officiis praesentium maxime. Numquam voluptas accusamus, fugiat laudantium a, iure, ipsum dolore minus ullam earum quaerat debitis aliquid. Rem maiores dolorum libero asperiores quisquam sint inventore fuga exercitationem, harum pariatur? Accusamus corrupti amet temporibus reprehenderit voluptas, nemo nobis consectetur nam quis odio, laborum cupiditate laudantium saepe alias qui, molestias ipsum expedita error velit? Sint ex veritatis quo aperiam fugiat odio quis perferendis accusantium sit consequuntur porro veniam ipsa exercitationem non commodi nemo, officia recusandae minus dolores voluptas labore praesentium aliquid velit corporis. Corrupti, ratione nesciunt necessitatibus iusto odit repellendus voluptas quos velit itaque nobis excepturi eveniet accusamus incidunt quibusdam. Neque, hic dolores?</p>
       <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

import Child from './child'


function parent() {
    return ( 
        <div className='p-2 my-2'
        style={{border:'2px solid red'}}>
            <h3>Parent Compo</h3>
            <Child name='alex' 
            message='good morning'/>
             <Child name='Rmesh' 
            message='Jay shri Ram'/>
        </div>
     );
}

export default parent;
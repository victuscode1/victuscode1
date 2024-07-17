async function f(){
 let result = "First!";
let promise= new Promise((resolve,reject)=> {
    setTimeout(()=>resolve('done!'),3000);
}
);
result= await promise;
console.log(result);
}
f();
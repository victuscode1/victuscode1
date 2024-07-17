function pattern2(n:number) {
    for(let i=n; i>=1;i--){
      let star= i;
      let space=n-star; 
      let currRow="";
   
for (let j=1;j<=space;j++){
   currRow +=" ";
}
for (let j=1;j<=star;j++) {
    currRow +="*";
 }
    }}

    pattern2(5);
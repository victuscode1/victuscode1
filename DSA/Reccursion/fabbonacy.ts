function fabO(n:number):nubmber  {
    console.log(n);
    if(n<1){
   return n;
}
else{
    return console.log(fabO(n-1) + fabO (n-2) );
}
}

fabO(3);
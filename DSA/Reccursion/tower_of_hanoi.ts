function toh(n,s,d,h):void {
    if(n==0) return;

    toh(n-1,s,h,d);
    console.log("move ",n," from", s, "to",d );

    toh(n-1,h,d,s);


}

toh(4,"A","B","C");
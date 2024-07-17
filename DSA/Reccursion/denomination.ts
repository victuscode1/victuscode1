function add(n:number, psf:string, step:number):void {
    if(step==n){
        console.log(psf);
        return;
    }

    if(step > n) return;

    //step 1
    add (n,psf+10, step+10);
    //step 2
    add (n,psf+50, step+50);
    //step 3
    add (n,psf+100, step+100);
    //step 4
    add (n,psf+500, step+500);

}

add(160,"", 0);
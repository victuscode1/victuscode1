//program climbing stair with condition 1,2,3 stair at a time


function climb(n:number, psf:string, curr:number){
    if(curr==n){
        console.log(psf);
        return;
    }
    if(curr > n) return;
    //1st jump
    climb(n, psf+1, curr+1)
    //jump 2
    climb(n, psf+2, curr+2)
    //jump 3
    climb(n, psf+3, curr+3)
    

}
climb(4, "", 0);
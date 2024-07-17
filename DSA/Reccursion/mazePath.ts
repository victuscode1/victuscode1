function mazePath(i, j, psf, n, m):void {
    if(i==n && j==m) {
        console.log(psf);
        return;
    }

    if (i>n || j>n) return;

    //horizontal

    mazePath(i, j+1, psf+"H", n, m);
    //vertical movement
    mazePath(i+1, j, psf+"V", n, m)
}

mazePath(1, 1, " ", 3, 4);
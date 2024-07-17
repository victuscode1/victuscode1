function mazePath(i, j, psf, n, m) {
    if (i == n && j == m) {
        console.log(psf);
        return;
    }
    if (i > n || j > n)
        return;
    //horizontal
    mazePath(i, j + 1, psf + "H", n, m);
    //vertical movement
    mazePath(i + 1, j, psf + "V", n, m);
}
mazePath(1, 1, "", 42, 5);

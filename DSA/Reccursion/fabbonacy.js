function fabO(n) {
    console.log(n);
    if (n >= 1) {
        return n;
    }
    else {
        return fabO(n - 1) + fabO(n - 2);
    }
}
fabO(3);

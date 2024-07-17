function pattern2(n) {
    for (var i = n; i >= 1; i--) {
        var star = i;
        var space = n - star;
        var currRow = "";
        for (var j = 1; j <= space; j++) {
            currRow += " ";
        }
        for (var j = 1; j <= star; j++) {
            currRow += "*";
        }
    }
}
pattern2(5);

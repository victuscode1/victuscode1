function binarySearch(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor(l + r) / 2;
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] > l) {
            l = mid + 1;
        }
        else if (arr[mid] < r) {
            r = mid - 1;
        }
    }
    return -1;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var ans = binarySearch(arr, 90);
console.log(ans);

function findFirstOccurance(arr, target) {
    var l = 0, r = arr.length - 1, ans = -1;
    while (l <= r) {
        var mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) {
            ans = mid;
            r = mid - 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return ans;
}
function findLastOccurance(arr, target) {
    var l = 0, r = arr.length - 1, ans = -1;
    while (l <= r) {
        var mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) {
            ans = mid;
            l = mid + 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return ans;
}
function searchRange(arr, target) {
    var first = findFirstOccurance(arr, target);
    var last = findLastOccurance(arr, target);
    return [first, last];
}

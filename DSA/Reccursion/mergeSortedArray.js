function merge2Sorted(num1, num2) {
    var ans = [];
    var i = 0, j = 0;
    while (i < num1.length && j < num2.length) {
        if (num1[i] < num2[j]) {
            ans.push(num1[i]);
            i++;
        }
        else {
            ans.push(num2[j]);
            j++;
        }
    }
    if (i == num1.length) {
        while (j < num2.length) {
            //remaining element are added
            ans.push(num2[j]);
            j++;
        }
    }
    else {
        while (i < num1.length) {
            //remaing element are added
            ans.push(num1[i]);
            i++;
        }
    }
    return ans;
}
function mergeSort(arr, l, r) {
    if (l == r) {
        return [arr[l]];
    }
    var mid = Math.floor((l + r) / 2);
    var left = mergeSort(arr, l, mid);
    var right = mergeSort(arr, mid + 1, r);
    return merge2Sorted(left, right);
}
var arr = [10, 50, 46, 52, 15, 65, 465, 56, 45, 4658656, 45];
var sorted = mergeSort(arr, 0, arr.length - 1);
console.log(sorted);

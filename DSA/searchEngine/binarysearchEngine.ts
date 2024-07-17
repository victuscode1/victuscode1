function findFirstOccurance(arr: number[], target: number): number {
    let l = 0, r = arr.length - 1, ans = -1;
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) {
            ans = mid;
            r = mid - 1;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

function findLastOccurance(arr: number[], target: number): number {
    let l = 0, r = arr.length - 1, ans = -1;
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) {
            ans = mid;
            l = mid + 1;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

function searchRange(arr: number[], target: number): number[] {
    let first = findFirstOccurance(arr, target);
    let last = findLastOccurance(arr, target);
    return [first, last];
}
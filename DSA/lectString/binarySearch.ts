function binarySearch(arr: number[], target:number):number {
    let l =0;
    let r = arr.length - 1;
    while (l<=r){
        let mid = Math.floor((l+r) / 2) ;
        if (arr[mid]== target){
            return mid;
        }
        else if (arr[mid] < target){
            l=mid + 1 ;
        }
        else if (arr[mid] > target){
            r=mid - 1
        }
    }
    return -1; //target not found in the array
}

let arr =[10, 20, 30, 40, 50, 60, 70, 80, 90];
let ans = binarySearch(arr, 90)
console.log(ans)
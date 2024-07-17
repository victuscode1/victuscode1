function merge2Sorted(num1:number[], num2:number[]):number[] {
   
    let ans:number[]=[];
    let i=0, j=0;

    while(i<num1.length && j< num2.length){


        if(num1[i]<num2[j]){
        ans.push(num1[i]);
        i++;
    }
    else {
        ans.push(num2[j]);
        j++;
    }

}


    if (i== num1.length){
        while(j<num2.length){
            //remaining element are added
            ans.push(num2[j]);
            j++;



        }
    }
    else {
        while(i<num1.length)    {
            //remaing element are added
            ans.push(num1[i]);
            i++;
        }
    }

    return ans;


}


function mergeSort(arr:number[], l:number, r:number):number[]{


    if (l==r){
        return [arr[l]];
    }

    let mid =Math.floor((l+r)/2);
    let left =mergeSort(arr, l, mid);
    let right =mergeSort(arr, mid+1, r);
    return merge2Sorted(left,right);
}

let arr =[10,50,46,52,15,65,465, 56, 45, 4658656, 45];
let sorted =mergeSort(arr, 0, arr.length-1);
console.log(sorted);






























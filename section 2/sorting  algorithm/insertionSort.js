function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let val = arr[i];
        let j = i-1;
        while(j>=0 && arr){
            if(arr[j] > val){
                arr[j+1] = arr[j];
                break;
            }
            j--;
        }
        arr[j] = val;
    }
    return arr;
}


console.log(insertionSort([3,2,1,5,67,7,5,434,352445,432,5]))
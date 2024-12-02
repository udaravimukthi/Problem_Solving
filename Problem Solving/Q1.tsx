//countOddNumbersInAnArray

function countOddNumberInAnArray(arr: number[]): number {
    let count = 0;
    for(let numberOfCount of arr){
        if(numberOfCount%2 !==0){
            count++;
        }
    }
    return count;
}

//printsmallestNumber in array

function printSmallestNumberInArray(arr: number[]): number {
    let smallest = arr[0];
    for(let number of arr){
        if(number < smallest) {
            smallest = number;
        }
    }
    return smallest;
}
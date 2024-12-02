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
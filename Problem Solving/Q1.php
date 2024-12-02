<?php

//countOddNumbersInAnArray

function countOddNumberInAnArray(array $arr): int {
    $count = 0;
    foreach($arr as $number){
        if($number%2 !== 0){
            $count++;
        }
    }
    return $count;

}

//printsmallestNumber in array

function printSmallestNumberInArray(array $arr): int {
    $smallest = $arr[0];
    foreach($arr as $number){
        if($number < $smallest){
            $smallest = $number;
        }
    }
    return $smallest;
}
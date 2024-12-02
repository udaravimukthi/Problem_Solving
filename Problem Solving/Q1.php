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
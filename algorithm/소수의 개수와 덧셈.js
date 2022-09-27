/*
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
str에 나타나는 숫자 중 소수의 최대 값과 소수가 아닌 수의 최소 값을 찾아
이를 "(최소값) (최대값)" 형태의 문자열을 반환하는 함수를 완성하세요

예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하라

제한사항 
-s에는 둘 이상의 정수가 공백으로 구분되어있다
-문자열에는 소수가 한 개 이상 섞여있으며 음수는 없다
*/

// let s = '2 3 4 5'; // 4 5
// let s = '15 3 10 9 7 8'; 8 7
let s = '97 75 88 99 95 92 73'; // 97 75

function solution (s){

    let arr = s.split(' ');
    let primeArr = [];
    let elseArr = [];

    for(let i = 0 ; i < arr.length ; i++){
        
        if(isPrime(arr[i])){
            primeArr.push(arr[i]);
        }else{
            elseArr.push(arr[i]);
        };
    }

    let max = primeArr.sort()[primeArr.length-1];
    let min = elseArr.sort()[0];
    console.log(primeArr,elseArr);
    
    return `${min} ${max}`;

}

function isPrime(num) {
    for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
}


console.log(solution(s));
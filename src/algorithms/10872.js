// 팩토리얼
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
// input : N(0 ≤ N ≤ 12)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');
let n = parseInt(input[0]);

function factorial(n){

    if(n <= 1) return 1 ; 

    return n*factorial(n-1);
}

console.log(factorial(n));
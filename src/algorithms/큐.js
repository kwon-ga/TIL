// queue
// N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
// 명령은 총 여섯 가지이다.
/*
    피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
    이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
    n=17일때 까지 피보나치 수를 써보면 다음과 같다.
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
    n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.
*/
// 첫째 줄에 n이 주어진다. n은 20보다 작거나 같은 자연수 또는 0이다.

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [input] = require('fs').readFileSync('input.txt').toString().split('\n').map(e=>Number(e));


let Fibonacci = (i) => {
    if(i === 0) return 0
    if(i === 1) return 1

    return Fibonacci(i-2)+Fibonacci(i-1)
}


console.log(Fibonacci(input));




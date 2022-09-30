/*
1번. 없는 정수 사이의 합 (하)
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 숫자는 두개입니다. 두 정수를 a,b라고 했을 때, a와 b 사이에 속한 
모든 정수의 합을 리턴하는 함수, solution을 완성하세요. 
예를 들어 a = 3, b = 5인 경우, 
3 + 4 + 5 = 12이므로 12를 리턴합니다.

입출력 예
[1,2,4,6,7,8,9,0]
12
[7,8,3,5,6,1,2,4]
45
지정 입력값
[1,3,5,9,2,4,8,0]
13
*/
let arr1=[1,3,5,9,2,4,8,0];

let arr=[1,2,3,4,5,6,7,8,9,0];

function solution(arr1){
    let result = 0;
    let not_num = arr.filter(e => !arr1.includes(e)).sort((a,b)=>a-b);
    
    for(let i = not_num[0] ; i <= not_num[not_num.length-1] ; i++){
        result += i;
    }

    return result
}
console.log(solution(arr1))
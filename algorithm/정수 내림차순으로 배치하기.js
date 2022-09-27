/*

문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
입출력 예
n	return
118372	873211

*/





let n = 118372;
let result = parseInt((n+'').split('').sort((a,b)=>b-a).join(''));



// 숫자로 처리하는게 더 빠름 (예시)

// // var nums =[];
// do{
//     nums.push(n%10);
//     n=Math.floor(n/10);
// } while(n>0)

// return nums.sort((a,b)=>b-a).join('')*1;


console.log(result);
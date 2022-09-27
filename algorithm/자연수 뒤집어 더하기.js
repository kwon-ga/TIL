/* 
자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 
리턴해주세요
예를들어 n이 12345면 5+4+3+2+1=15 라는 문자열을 리턴합니다

n은 100,000,000 이하의 자연수입니다.
*/

let n = 718253 ;
// let n = 12345 ;
//  let n = 1532576 ;

let result = (n) => {

    let k = (n+'').split('').reverse();

    let sum = k.reduce((a,b)=>a*1 + b*1); // 뒤에 들어오는 인자가 더 있다.. , 0  / 필수인가 ? 

    return k.join('+')+`=${sum}`;
};

console.log(result(n));
console.log(typeof result(n));
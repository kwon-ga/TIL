/*
2번. 이상한 문자 만들기2 (중)
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
제한 조건
공백을 포함하지 않고, 문자열 전체의 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
입출력 예
"try hello world" -> "TrY hElLo WoRlD"
“yoon ji yong” -> “YoOn Ji YoNg”

지정 입력값
“hang hae ninety nine”  ->  “HaNg HaE nInEtY nInE”
*/


let s='hang hae ninety nine';

function solution(s){
    let index =0;

	let v = s.split('').map((e,i,arr)=>{
        
        if(e !== ' '){
            return index++ % 2 === 0 ? e.toUpperCase() : e.toLowerCase()
        }else{
            return e
        }
        
    });
    
	return v.join('');
}
console.log(solution(s))
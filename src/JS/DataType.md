## 자바스크립트의 자료형
<br>

-**숫자 타입** ( Number ) : 숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재한다.  
-**문자열 타입** ( String ) : 문자열  
-**불리언 타입** ( boolean ) : 논리적 참 (true)과 거짓 (false)  
-**undefined 타입** : var 키워드로 선언된 변수에 암묵적으로 할당되는 값  
-**null 타입** : 값이 없다는 것을 명시할 때 사용하는 값  
-**심벌 타입** (symbol) : ES6에서 추가된 7번째 타입  
-**객체 타입** : 객체, 함수, 배열 등  

<br>

***

<br>

## Number 타입이란 ?  

<br>
java, C와 같은 언어는 정수, 실수를 구분해서 다양한 숫자 타입을 제공한다.   
하지만 자바스크립트는 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리해준다.

<br>

```js
let integer = 10; 	// 정수
let double = 10.12;	// 실수
let negative = -10;	// 음의 정수

console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5
```

숫자 타입은 추가적으로 세 가지 특별안 값도 존재한다.


```js
console.log(10 / 0); // Infinity : 양의 무한대
console.log(10 / -0); // -Infinity : 음의 무한대
console.log(1 * 'String'); // NaN (not-a-number): 산술 연산 불가
// NaN은 대소문자를 구별하기 때문에 사용할 때 주의해야 한다 !!
```

<br>

***

<br>

## 문자열 타입이란 ?

<br>

문자열 타입은 텍스트 데이터를 표현하는데 사용한다.  
문자열을 사용하는 표기법은  
' ' : 작은따옴표  
" " : 큰따옴표  
\` \` : 백틱  
이 세가지가 있는데 이 세 가지로 텍스트를 감싸서 문자열을 표현할 수 있다.

따옴표로 감싸지 않으면 텍스트를 키워드나 식별자로 인식하는 오류가 발생할 수 있다.


```js
// 정상적인 따옴표 사용법
let str = '문자열 "내부" 문자열'; 
console.log(str); // '문자열 "내부" 문자열'

let string = "문자열 '내부' 문자열";
console.log(string); // "문자열 '내부' 문자열"

// 따옴표 구분을 하지 않는 경우
let errstr = '문자열 '내부' 문자열'; // Uncaught SyntaxError: Unexpected identifier '내부'

```

문자열을 언급하면서 백틱 (\` \`)을 언급하지 않았는데 앞으로 자주 써야하고 중요하기에 나눠서 정리한다.

<br>

***

<br>

## 불리언 타입이란 ?  
<br>
불리언 타입은 논리적 참 혹은 거짓을 나타내는 true, false 이다.

<br>

```js
let bool = true;
console.log(bool); // true

bool = false;
console.log(bool); // false
```
불리언 타입의 값은 조건문에서 주로 사용하는데 간단한 코드를 작성해보자

```js
let bool = true;
function conditional(data){
  if(data){
    console.log(`data의 값은 참입니다 : ${data}`);
  }else{
    console.log(`data의 값은 거짓입니다 : ${data}`);
  }
}

conditional(bool); //data의 값은 참입니다 : true


bool = false;
conditional(bool); //data의 값은 거짓입니다 : false

```

<br>

***

<br>

## undefined 타입이란 ?
<br>
var 키워드로 선언한 변수는 암묵적으로 undefined로 자동 초기화된다.

변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄지기 전에 자바스크립트 엔진이 undefined로 초기화한다.



그럼 let과 const 키워드는 ?
우선 예시 코드를 살펴보자
```js
var foo;
console.log(foo); // undefined

let foo1;
console.log(foo1); // undefined

const foo2; // SyntaxError: Missing initializer in const declaration

```
var과 let 키워드로 선언한 변수를 확인해보니 두 값 모두 undefined가 나왔다.  
const는 선언 자체가 오류가 난다.

var과 let의 키워드는 undefined로 초기화되는 시점이 다르다.

<br>

***

<br>

## null 타입이란 ?

<br>

프로그래밍 언어에서 null은 변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.

즉, 변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 뜻이다.

다만
```js
let foo = '집인데 집에 가고싶어요';
foo = null;
```
위 처럼 null을 선언해서 참조를 제거하기 보다는 
변수의 스코프를 좁게 만들어서 변수 자체를 재빨리 소멸시키는게 더 좋다.

또한 함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다.

<br>

***

<br>

## 심벌 타입이란?
<br>
심벌은 ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.

심벌 값은 다른 값과 중복되지 않는 유일무이한 값이다.  
주로 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.

<br>

```js
// 심벌 값 생성
let key = Symbol('asd2468');
console.log(key); // Symbol(asd2468)
console.log(typeof key); // symbol
```



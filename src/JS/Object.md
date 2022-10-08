## 객체(Object) 란?

<br>

자바스크립트의 데이터 타입은 원시 타입과 객체 타입으로 분류된다.

-원시 타입은 단 하나의 값만 나타내고, 원시 타입의 값은 변경이 불가능하다.  
-객체 타입은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조이며, 객체 타입의 값은 변경 가능한 값이다.

<br>

자바스크립트는 객체 기반의 프로그래밍 언어이고, 자바스크립트를 구성하는 거의 모든 것은 객체로 구성되어 있다.

객체는 0개 이상의 프로퍼티로 구성된 집합이며, 하나의 프로퍼티는 key - value의 모양을 가지고 있다.

<br>

***

<br>

## 객체 리터럴이란?

<br>

리터럴(literal)은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법이다.

고로, 객체 리터럴은 객체를 생성하는 표기법을 의미한다.

객체 리터럴을 사용하면 객체를 생성하기 위해 Class를 먼저 선언하고 new 연산자와 함께 생성자를 호출할 필요가 없이 일반적인 문자, 문자열을 만드는 것과 같이 객체를 생성할 수 있다.

객체 리터럴을 사용하면 좋은점
-코드가 간결해진다.
-class와 같이 복잡하지 않아도 된다.

<br>

객체 리터럴로 객체를 생성해보자

```js

let objectLiteral = {
  	key : 'value',
  	func : function () { return 'hello world' }
}

console.log(objectLiteral);			// 1
console.log(objectLiteral.key);		// 2
console.log(objectLiteral.func());	// 3 

/*
out put
1. {key: 'value', func: ƒ}
2. value
3. hello world 
*/
```
<br>

객체 리터럴은 중괄호 '{ }' 내부에 0개 이상의 프로퍼티를 정의해서 선언하는 것을 알 수 있다.

<br>

***

<br>

## 프로퍼티란 ?

<br>

객체의 상태를 나타내는 값으로
key - value의 형태로 객체를 구성한다.

```js
let objectLiteral = {
  	key : 'value', // 프로퍼티, 프로퍼티 키 : 'key', 프로퍼티 값 : 'value'
  	'my key' : 'my value', // 프로퍼티, 프로퍼티 키 : 'my key', 프로퍼티 값 : 'my value'
  	func : function () { return 'hello world' } // 메서드
}

```

<br>

메서드?

객체의 프로퍼티 값이 함수로 구성되어 있을 경우 메서드(Method)라고 부른다.

메서드는 프로퍼티를 참조하고 조작할 수 있는 동작을 의미한다.

<br>

***

<br>

객체 리터럴을 사용해서 사칙연산을 하는 객체를 만들어보자

```js
const calculator = {
	add : (a,b) => a+b,
    sub : (a,b) => a-b,
    mul : (a,b) => a*b,
    div : (a,b) => a/b
}

console.log(calculator.add(1,1)); // 2
console.log(calculator.sub(2,1)); // 1
console.log(calculator.mul(1,2)); // 2
console.log(calculator.div(4,2)); // 2
```
<br>

### 구조 분해 할당

객체나 배열을 변수로 분해할 수 있는 ES6에서 새롭게 도입한 문법이다.

<br>

#### 객체 구조 분해 할당 예제

```js
const obj = { name : 'kwonga', age:'50', bloodType : 'D', major : 'fishing' }

const { name, abc, bloodType, major, say } = obj;

console.log( name, abc, bloodType, major, say , age);
// wonga undefined D fishing undefined
```

<br>
예제를 보면 변수명과 객체의 프로퍼티 이름이 일치해야 정상적으로 구조 분해 할당이 된 것을 확인할 수 있다.

<br>

#### 배열 구조 분해 할당 예제

```js
const arr = ['1월','2월','3월','4월'];


const [ january, february , april ] = arr ;

console.log(january, february , april);
// 1월 2월 3월
```

변수명은 개발자 마음대로 선언이 가능하다.
또한 배열의 순서대로 할당되는 것을 볼 수 있다.

선언한 변수를 제외한 나머지 배열의 요소는 할당되지 않는다.

<br>

***

<br>

#### 배열 구조 분해 할당을 사용해서 변수의 값 바꾸기

<br>

1. 임시변수를 사용하기

```js
let a = 1 ;
let b = 9 ; 
let temp ; 

temp = a ;
a = b ; 
b = temp ;

console.log(a,b); // 9  1
```

2. 배열 구조 분해 할당 사용하기

```js
let a = 10 ;
let b = 90 ;

[ a, b ] = [ b, a ];

console.log(a,b); // 90  10
```

배열 구조 분해 할당을 사용하면 직관적으로 변경할 수 있다.


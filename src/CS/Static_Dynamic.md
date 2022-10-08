## 동적 타입 언어와 정석 타입 언어 ?

<br>

대표적인 동적 타입 언어 : JavaScript, Python, PHP, Ruby, Lisp, Perl 등  
대표적인 정적 타입 언어 : JAVA, C, C++, GO, Haskell, Rust, Scala 등

<br>

***

<br>

## 정적 타입 언어

<br>

기본적으로 정적 타입의 언어는 변수를 선언할 때 변수에 할당할 수 있는 값으 종류, 즉 데이터 타입을 사전에 선언해야한다.  
 이를 명시적 타입 선언이라 한다. ( explicit type declaration ) 

<br>

```C
// c에서 변수를 선언하는 예시
char c; // c 변수에는 1바이트 정수 타입의 값만 할당할 수 있다.

int num; // num 변수에는 4바이트 정수 타입의 값만 할당할 수 있다.
```
<br>

위와 같이 정적 타입 언어는 변수의 타입을 변경할 수 없고 변수에 선언한 타입에 맞는 값만 할당할 수 있다.  
이러한 정적 타입 언어는 컴파일 시점에 타입을 체크하는데 
이 과정에서 타입에 맞지 않는 변수가 할당되면 에러 메세지와 함께 프로그램 실행 자게를 막는다.

<br>  

***

<br>


## 동적 타입 언어

<br>

동적인 언어는 변수를 선언할 때 데이터 타입을 선언하지 않는다.
(다만 자바스크립트는 키워드를 사용해 변수를 선언한다.)

자바스크립트는 정적 타입 언어와 같이 미리 선언한 타입의 값만 할당할 수 있는 것이 아니다.
어떤 데이터 타입의 값이라도 자유롭게 할당할 수 있다.

```js
// let 키워드로 변수 선언
let foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'hello';
console.log(typeof foo); // string

foo = false;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol();
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); // object

foo = () => {}; // 함수
console.log(typeof foo); // object
```
예제를 통해 let 키워드를 사용해 선언한 변수에 모든 데이터 타입이 할당 되는 것을 확인할 수 있다.

<br>

***

<br>

## 동적 타입 언어의 단점

<br>

복잡한 프로그램에서 변화하는 변수의 값을 추적하기 어려울 수 있을 뿐더러,  
타입이 고정되어 있지 않고 동적으로 변하는 동적 타입 언어의 특정 상 변수의 값이 언제든 의도하지 않았는데 변경될 수 있다.  

또한 자바스크립트 개발자의 의도와는 다르게 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되기도 한다.  

그로인해 엄청난 에러를 생성할 수 있다...

<br>

***

<br>

## 동적 타입의 언어를 사용하는 경우에는 ..

<br>

-변수는 꼭 필요한 경우에 한해 제한적으로 사용한다.  
-변수의 유효범위 ( 스코프 )는 최대한 좁게 만들어 변수의 부작용을 억제하자  
-전역 변수 사용을 자제하자  
-변수보다는 상수를 사용해 값의 변경을 억제한다.  
-변수의 네이밍 규칙을 준수하고, 목적이나 의미를 파악할 수 있게 한다.

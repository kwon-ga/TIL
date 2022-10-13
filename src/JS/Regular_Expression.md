## ✔ 정규표현식

<br>

정규표현식은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 ***형식언어이다.***

정규표현식은 문자열을 대상으로 패턴 매칭 기능을 제공한다.

*패턴 매칭 기능이란 ? 
특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능을 의미한다.

```js
// 데이터로 전달받은 전화번호 
const tel = '0일0-1234-5육78';
const tel2 = '010-1234-5678';

const regExp = /^\d{3}-\d{4}-\d{4}$/;

regExp.test(tel);   // false
regExp.test(tel2);   // true
```

다만 정규표현식은 주석과 공백을 허용하지 않고 여러가지 기호를 혼합해서 사용하기 때문에 가독성이 좋지 않다는 문제가 있다.

<br><br>

## ✔ 정규표현식의 생성

<br>

정규 표현식은 

    / pattern / i 
    시작기호(/) 패턴(pattern) 종료기호(/) 플래그(i)

의 형태로 구성되어있다.

<br>

정규표현식 객체 (=RegExp 객체)를 생성하기 위해서는 정규표현식 리터럴과 RegExp 생성자 함수를 사용할 수 있다.

정규표현식 리터럴로 정규표현식 객체를 생성하는 예제이다.
```js
// 정규표현식 리터럴로 정규표현식 객체를 생성한다.
const target1 = 'Is this all there is?';
const target2 = 'is this all there is?';
const target3 = 'all there?';

// 패턴: is, 플래그: i (대소문자를 구별하지 않고 검색한다.)
const regexp = /is/i;

regexp.test(target1);   // true
regexp.test(target2);   // true
regexp.test(target3);   // false
```

<br>

RegExp 생성자 함수를 사용해서 정규표현식 객체를 생성하는 예제이다.

✔ new RegExp(pattern[,flags]);
생성자 함수의 모양이다.

```js
const target = 'Is this all there is?';

const regexp = new RegExp(/is/i);

regexp.test(target);    // true
```

<br>

아래 예제는 동적으로 RegExp 객체를 생성하는 예제이다.

```js
let count = (str,char) => str.match(new RegExp(char,'gi'));

count('Is this all there is?','is'); // ['Is', 'is', 'is']
```

<br>

***

<br>

## ✔ RegExp 메서드

<br>

자주 사용하는 주요 메서드를 정리했다.

<br>


***RegExp.prototype.exec();***

exec 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다. 매칭 결과가 없는 경우 null을 반환한다.

```js
const target = 'Is this all there is?';
const regExp = /is/;

regExp.exec(target);    // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
```
문자열의 첫 번째 검색 결과만 반환한다.

<br><br>

***RegExp.prototype.test();***

test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.

```js
const target = 'Is this all there is?';
const regExp = /is/;

regExp.test(target);    // true
```

<br><br>

***String.prototype.match();***

String의 match 메서드는 대상의 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다.

```js
const target = 'Is this all there is?';
const regExp = /is/;

target.match(regExp); // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
```



<br>

***

<br>

## ✔ 플래그

<br>

정규표현식의 검색 방식을 설정하기위해 사용되는 중요한 3개의 플래그를 살펴보자

|플래그|의미|설명|
|:---:|:---:|:---:|
|i|Ignore case|대소문자를 구별하지 않고 패턴을 검색한다.|
|g|Global|대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검사한다.|
|m|Multi Line|문자열의 행이 바뀌더라도 패턴 검색을 계속한다.|


플래그는 옵션이므로 선택적으로 사용할 수 있으며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수 있다. 

디폴트 옵션은 대소문자를 구별해서 일치하는 첫번째 대상을 검색한다.

<br>

***

<br>

## ✔ 패턴

<br>

정규 표현식은 "일정한 규칙(패턴)을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어이다.

패턴은 /로 열고 닫으며 문자열의 따옴표는 생략한다.
따옴표를 포함하면 패턴에 따옴표가 추가된다.

또한 패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다.

아래는 패턴을 표현하는 몇 가지 방법이다.

<br>

***임의의 문자열 검색***

.은 임의의 문자 한 개를 의미한다. 문자의 내용은 전혀 상관 없다.

```js
const target = 'Is this all there is?';
const regExp = /.../g;

target.match(regExp); // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']

```


<br>

***반복 검색***

{m,n}은 패턴이 최소 m번 최대 n번 반복되는 문자열을 출력해준다.

```js
const target = 'A AA B BB Aa Bb AAA';
const regExp = /A{1,2}/g;
const regExp2 = /.{1,2}/g;

target.match(regExp); // ['A', 'AA', 'A', 'AA', 'A']
target.match(regExp2); // ['A ', 'AA', ' B', ' B', 'B ', 'Aa', ' B', 'b ', 'AA', 'A']
```

<br>

참고  

1.{n}은 패턴이 n번 반복되는 문자열을 의미한다. 즉, {n,n}과 같다.  
2.{n,}은 패턴이 최소 n번 이상 반복되는 문자열을 의미한다.  
3.+는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. 즉 2번의 {1,}와 같은 의미이다.


```js
const target = 'A AA B BB Aa Bb AAA';
const regExp1 = /A{2}/g;
const regExp2 = /A{2,}/g;
const regExp3 = /A+/g;


target.match(regExp1); // ['AA', 'AA']
target.match(regExp2); // ['AA', 'AAA']
target.match(regExp3); // ['A', 'AA', 'A', 'AAA']
```

<br>

4.?는 앞선 패턴이 최대 1번 이상 (0번 포함) 반복되는 문자열을 의미한다.
```js
const target = 'color colour colouur colouuur';

// colo 다음 u가 최대 1번 이상 (0번 포함) 반복되는 문자열을 찾는다.
const regExp = /colou?r/g;

target.match(regExp); // ['color', 'colour']
```


<br><br>

[다음 페이지 ▶︎](./Regular_Expression2.md)
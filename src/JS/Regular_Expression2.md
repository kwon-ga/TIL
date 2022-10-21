## ✔ 자주 사용하는 정규표현식

<br>

||예시|설명|
|:---:|:---:|:---:|
|반복검색|
|.|/.../g|문자의 내용과는 상관없이 세 자리 문자를 검색|
|{m,n}|{1,2}|패턴이 최소 m번 최대 n번 반복되는 문자열 출력|
|{n}|{3}|패턴이 n번 반복되는 문자열을 의미한다. ={n,n}|
|{n,}|{5,}|패턴이 최소 n번 이상 반복되는 문자열을 의미한다.|
|+|/a+/|바로 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다.|
|?|/colou?r/|앞선 패턴이 0~1 번 반복되는 문자열을 의미한다.|
|OR검색|
|\||/A\|B/g|or의 의미를 가지고있다.|
|[ ]|/[AB]/|대괄호를 사용하면 문자열 내부의 문자들을 기반으로 or을 의미한다.|
|[ - ]|/[A-Za-z]/|[ ] 내부에 -는 범위를 지정해준다.|
|약어로 검색|||
|\\d |/\\d/|숫자를 의미한다.|
|\\D |/\\D/|숫자가 아닌 문자를 의미한다.|
|\\w |/\\w/|알파벳,숫자,언더스코어를 의미한다. = [A-Za-z0-9_]|
|\\W |/\\W/|알파벳,숫자,언더스코어가 아닌 문자를 의미한다. |
|NOT 검색|||
|^|/[^0-9]/|[ ... ] 내부의 ^는 not의 의미를 갖는다.|
|^|/^http/|[ ... ] 외부의 ^는 문자열로 시작하는지 검토한다.|
|$|/com$/| 문자열로 끝나는지 검토한다.|
|기타||
|\s||여러가지 공백 문자를 의미한다. [\t\r\n\v\f]와 같은 의미이다|

***

<br><br>

## ✔ 특정 단어로 시작하는지 검사

http:// 혹은 https:// 로 시작하는지 검토

```js
const url = 'https://test.com';

/^https?:\/\//.test(url); // true

/^(http|https):\/\//.test(url) // true
```

<br>

## ✔ 특정 단어로 끝나는지 검사

.html로 끝나는지 검토

```js
const fileName = 'index.html';

/.html$/.test(fileName); // true
```

<br>

## ✔ 숫자로만 이루어진 문자인지 검사

```js
const num = '1234567890';

/^[0-9]+$/.test(num); // true
/^\d+$/.test(num); // true
```
처음과 끝이 숫자이고 최소 한 번 이상 반복되는 문자열을 의미한다.


<br>

## ✔ 하나 이상의 공백으로 시작하는지 검사

```js
const str = ' 안녕하세요';

/^[\s]+/.test(str);
```


<br>

## ✔ 아이디 유효성 검사

알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10 자리인지 검사한다.

```js
const id = 'abc123';

/^[A-Za-z0-9]{4,10}$/.test(id);
```

<br>

## ✔ 메일 주소 형식에 맞는지 검사

```js
const email = 'test@test.com';

/^[A-Za-z0-9]([-_\.]?[0-9a-zA-z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-z])*\.[a-zA-z]{2,3}$/.test(email)
```

<br>

## ✔ 핸드폰 형식에 맞는지 검사

```js
const num = '010-0000-0000';

/^\d{3}-\d{3,4}-\d{4}$/.test(num);
```


<br>

## ✔ 특수 문자 포함 여부 검사

```js
const target = 'abc#def';

(/[^A-Za-z0-9]/gi).test(target);
```

<br>

## ✔ 특수 문자 제거

```js
target.replace(/[^A-Za-z0-9]/gi,'');
```
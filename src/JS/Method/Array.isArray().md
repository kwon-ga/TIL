## Array.isArray();
    
<br>
Array.isArray는 Array 생성자 함수의 정적 메서드이다.
Array.isArray 메서드는 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

<br>

``` javascript
//true
Array.isArray([]);
Array.isArray([1,2]);
Array.isArray(new Array());

//false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefind);
Array.isArray({0:1,length:1});
//...

```
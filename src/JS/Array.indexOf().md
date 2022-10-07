## Array.indexOf();


indexOf 는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환하는 메서드이다.

-원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러개 있다면 처음 검색된 요소의 인덱스를 반환한다.

-원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.

``` javascript
const arr = [1,2,2,3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환.
arr.indexOf(2); // 1

// 요소가 없으니 -1을 반환
arr.indexOf(4); // -1

// 두 번째 인수는 검색을 시작할 인덱스. 생략 가능하며 생략 시 처음부터 검색
arr.indexOf(2,2); // 2
arr.indexOf(2,3); // -1
```
indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.

``` javascript
const foods = ['apple', 'banana', 'orange'];

//foods 배열에 'strawberry' 요소가 없다면
if(foods.indexOf('strawberry') === -1){
  
  //foods 배열에 'strawberry' 요소를 추가하라
  foods.push('strawberry');
  
}

// 콘솔 출력
console.log(foods) // ['apple', 'banana', 'orange', 'strawberry']
```
***

하지만 ES7에서 새로 도입된 Array.includes 메서드를 활용하면 가독성이 더 좋다. 
(사실 잘 모르겠다.)

``` javascript
const foods = ['apple', 'banana', 'orange'];

//foods 배열에 'strawberry' 요소가 없다면
if(!foods.includes('strawberry')){ // !false -> true
  
  //foods 배열에 'strawberry' 요소를 추가하라
  foods.push('strawberry');
  
}

// 콘솔 출력
console.log(foods); // ['apple', 'banana', 'orange', 'strawberry']

```
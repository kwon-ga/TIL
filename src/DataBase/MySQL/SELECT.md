## ✔ SELECT

<br>

SELECT 문을 사용하여 테이블의 레코드를 출력한다.

<br>

### ✔ 조건에 맞는 레코드 출력하기

```sql
SELECT 필드이름
FROM 테이블이름
WHERE 출력하고자 하는 조건
```

FROM 절에는 레코드를 선택할 테이블을 명시해준다.

테이블에서 출력하고자 하는 필드는 SELECT 키워드 뒤에 명시해준다.

WHERE를 사용해서 조건에 일치하는 레코드들을 출력할 수 있다.

<br><br>

### ✔ 테이블의 모든 필드를 출력하기

```sql
SELECT *
FROM 테이블이름
```

SELECT 키워드 뒤에 *은 모든 필드를 출력하라는 의미이다.

<br><br>

### ✔ 중복되는 값 제거하기

```sql
SELECT DISTINCT 필드이름
FROM 테이블이름
```

출력하고자 하는 레코드 중에 중복되는 값을 가지는 레코드가 있다면 
중복된 값은 단 한 번만 출력된다.

<br><br>

### ✔ 출력 결과 정렬하기

```sql
-- 오름차순
SELECT * 
FROM 테이블이름
ORDER BY 필드이름

-- 내림차순
SELECT * 
FROM 테이블이름
ORDER BY 필드이름 DESC
```

ORDER BY 절 뒤에 명시되는 필드를 기준으로 오름차순으로 정렬하여 출력해준다.

내림차순으로 출력하고 싶다면 ORDER BY 절 뒤에 명시된 필드이름 뒤에 DESC 키워드를 추가한다.

<br>

```sql
SELECT * 
FROM 테이블이름
ORDER BY 필드이름1 DESC, 필드이름2 ASC;
```
해당 에문은 필드이름1을 내림차순으로 정렬한 뒤 필드이름2로 오름차순 정렬한 결과 값을 출력한다.

<br><br>

### ✔ 별칭을 이용한 처리

```sql
SELECT 필드이름 AS 별칭
FROM 테이블이름

SELECT 필드이름
FROM 테이블이름 AS 별칭
```

테이블과 필드에 임시로 별칭을 부여하고, 해당 별칭을 SELECT 문에서 사용할 수 있다.

1번 예문은 필드이름에 별칭을 붙여서 별칭으로 출력하는 결과 값을 볼 수 있다.

2번 예문은 테이블이름에 별칭을 붙이는 예문이다.

<br>

```sql
SELECT 필드명1, CONCAT(필드명2,"=",필드명3) AS 별칭
FROM 테이블명
```

CONCAT() 함수는 인수로 전달받은 문자열을 모두 결합하여 하나의 문자열로 반환하는 함수이다.

해당 예문의 출력 결과는 아래와 같다.

|필드명1|별칭|
|:---:|:---:|
|필드명1의 데이터|필드명2의 데이터 = 필드명3의 데이터|
|필드명1의 데이터|필드명2의 데이터 = 필드명3의 데이터|
|...|...|
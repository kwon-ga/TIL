## ✔ ALTER

<br>

MySQL에서는 ALTER 문을 사용해서 데이터베이스와 테이블 내용을 수정할 수 있다.

<br>

### ✔ 데이터베이스 수정

<br>

ALTER DATABAS 문은 데이터베이스 전체적인 특성을 수정할 수 있게 해준다.

데이터베이스의 문자 집합이나 콜레이션을 변경할 수 있다.

*콜레이션(collation)이란 데이터베이스에서 검색이나 정렬과 같은 작업을 할 때 사용하는 비교를 위한 규칙의 집합을 의미한다.


```sql
ALTER DATABASE 데이터베이스이름 CHARACTER SET = 문자집합이름
ALERT DATABASE 데이터베이스이름 COLLATE = 콜레이션이름
```

자주 사용되는 대표적인 CHARACTER SET은 다음과 같다
1. utf8 : UTF-8 유니코드를 지원하는 문자셋 (1~3바이트)
2. euckr : 한글을 지원하는 문자셋 (1~2바이트)

<Br>

자주 사용되는 대표적인 COLLATION은 다음과 같다
1. utf8_bin
2. utf8_general_ci (기본 설정)
3. euckr_bin
4. euckr_korean_ci

COLLATION에서 ci는 case-insensitive를 의미하며 대소문자를 구분하지 않게 설정해준다.


<br><br>

### ✔ 테이블 수정


<br>

***새로운 필드 추가***

ALTER TABLE 문과 ADD 문을 사용하면, 테이블에 필드를 추가할 수 있다.

```sql
ALTER TABLE 테이블이름 ADD 필드이름 필드타입
```

<br>

***기존 필드 삭제***

ALTER TABLE 문과 DROP문을 사용하면 테이블의 필드를 삭제할 수 있다.


```sql
ALTER TABLE 테이블이름 DROP 필드이름
```


<br>

***필드 타입 변경***

ALTER TABLE 문과 MODIFY COLUMN 문을 사용하면 테이블의 필드 타입을 변경할 수 있다.


```sql
ALTER TABLE 테이블이름 MODIFY COLUMN 필드이름 필드타입
```



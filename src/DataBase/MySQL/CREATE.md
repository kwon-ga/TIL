## CREATE

<br>

CREATE 문을 통해서 테이터베이스와 테이블을 만들 수 있다.


<br>

### ✔ 데이터베이스 생성

<br>

```sql
CREATE DATABASE TIL;
```

생성한 데이터 베이스는 아래의 문법을 통해 확인할 수 있다.

```sql
SHOW DATABASES;
```

<br>

### ✔ 데이터베이스 선택하기

```sql
USE TIL;
```

위 명령어를 통해서 데이터 베이스를 선택할 수 있다.

<br>

***

<br>

### ✔ 테이블 생성

데이터베이스는 하나 이상의 테이블로 구성되며, 이러한 테이블에서 데이터를 저장하고 관리할 수 있다.

```sql
CREATE TABLE Test
(
    ID INT,
    Name VARCHAR(30),
    PASSWORD VARCHAR(30)
);
```

이렇게 만든 테이블은 아래 명령어를 통해 확인할 수 있다.

```sql
SHOW TABLES ;
```




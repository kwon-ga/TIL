## ✔ Sequelize 사용하기

<br>

npm을 사용해서 ***sequelize, mysql2, sequelize-cli*** 를 인스톨 해준다

```bash
# sequelize 설치
npm i sequelize mysql2 -S
npm i sequelize-cli -D
```

<br>

설치가 끝났으면 다음 명령어 사용해서 초기화를 시켜준다.

    npx sequelize init

해당 명령어를 실행하면

```
project name
├── models
│   └── index.js
├── config
│   └── config.json
├── migrations
├── seeders
├── package-lock.json
└── package.json
```
의 디렉토리 구조가 보일 것이다.

config/config.json 파일은 Sequelize가 어떤 데이터베이스에 접근해야하는지 알려주는 설정 파일이다.

config.json 파일을 수정한 후 모델을 만들어준다.

*데이터베이스를 생성하기 전이라면 아래 명령어를 사용하자

    npx sequelize db:create

<br>

***

## ✔ Sequelize model 생성하기

<br>

```bash
# Sequelize를 사용해서 모델을 만들어주는 명령어
npx sequelize model:generate --name Test --attributes nickname:string,password:string
```

이 명령어를 실행하면 migrations 폴더와 models 폴더에 파일이 생성된다.

models 폴더 내부의 파일들은 데이터베이스에서 읽고 변경하는 데이터를 모델이라는 형식으로 만들어서 정해놓은 형식대로 다루게 해준다.  
-> 스키마의 역할을 해준다고 생각하면 편하다.

migrations의 파일은 테이블을 생성하고 제거할 때 사용하는 파일이다.

사용자의 입맛에 따라 위 파일들을 수정하거나 수정 없이 사용하고자 한다면 아래 명령어를 입력해서 테이블을 만들자.


    npx sequelize db:migrate

<br>

## ✔ Sequelize model 사용하기

<br>

예시코드를 확인해보자

```js
// 데이터 조회, 수정이 필요한 모델을 불러오기
const { Test, sequelize, Sequelize } = require('./models');

// 코드 중략 ...

const test = await Test.findByPk(testId);
const test = await sequelize.query(`
    SELECT * 
    FROM Test
    `,{type:Sequelize.QueryTypes.SELECT});

```

위와 같이 사용할 수 있다.

<br>

***


## ✔ Sequelize Query
<br>

### 직접 쿼리문 사용하기


```js
var query = 'select * form user where name = admin'; 
const [result, metadata] = await sequelize.query(query,{
          type: Sequelize.QueryTypes.SELECT,
        })
```
<br>

### INSERT

-create(values: Object, options: Object): 레코드 생성함수  
-findOrCreate(options: Object): 조회 시 없으면 생성해주는 함수  
-findCreateFind(options: Object): 조회 시 없으면 생성 후 조회하는 함수

-upsert(vales: Object, options: Object): 한 레코드만 인서트하거나 업데이트 해주는 함수

<br>

### SELECT

-findOne(options: Object) : 하나만 조회하는 함수. find()와 동일  
-findAll(options: Object) : 여러 개를 조회하는 함수  
-findAndCountAll(findOptions: Object) : 조회 후 총 수 조회.  
-findByPk(id: Number | String | Buffer, options: Object) : 프라이머리키로 조회하는 함수  
-findCreateFind(options: Object) : 조회 시 없으면 생성 후 조회하는 함수  
-findOrCreate(options: Object): 조회수 없으면 생성해주는 함수

 
<br>
 

 

### UPDATE

-update(values: Object, options: Object) : 값을 업데이트 해주는 함수. 여러 레코드 가능  
-upsert(values: Object, options: Object) : 한 레코드만 인서트하거나 업데이트해 주는 함수


<br> 

### DELETE

-destroy(options: Object) : 한 개나 여러 레코드를 삭제하는 함수

<br>


 

## Sequelize SELECT Query함수의 Option
-attributes : 조회할 칼럼을 정하는 옵션.  
-attributes안의 include : table없는 칼럼을 추가할 때 쓰는 옵션.  
-where : 조회할 칼럼의 조건문을 정하는 옵션.  
-include : foreignKey로 Outer Left Join하는 옵션.  
-order : 정렬 옵션.  
-limit : 조회하는 레코드의 개수를 정하는 옵션.  
-offset : 몇 번째부터 조회할지 정하는 옵션.  

<br>


***

<br>

## ✔ Sequelize Model 관계 설정

<br>

예시)
```js
// modul 
static associate(model){  

    // 나는 ModulName333과 1:N 관계를 맺고있고 참조키는 foreignKeyName이다. (1)
    this.hasMany(models.ModulName333,{
        as:"ModuleName333",
        foreignKey:"foreignKeyName"
    });
}

// modul333
static associate(model){  

    // 나는 ModulName과 1:N 관계를 맺고있고 참조키는 foreignKeyName이다. (N)
    this.belongsTo(models.ModulName,{
        as:"ModuleName",
        foreignKey:"foreignKeyName"
    });
}
```


<br>

***

<br>

## ✔ Sequelize 명령어


<br>

|명령어|설명|
|:---:|:---:|
|npm i sequelize 2 -S <br>npm i sequelize-cli -D|다운로드|
|npx sequelize db:create|config.json 설정에 따라 DB를 생성해준다.|
|npx sequelize model:generate --name DB이름 --attributes 컬럼명:타입,...|명령어를 기반으로 모델을 만들어준다.|
|npx sequelize db:migrate|migrate 설정에 따라 테이블을 만들어준다.|
|npx sequelize migration:create --name fileName |파일이름에 따라 migration 파일을 만들어준다.|
|+migration|addColumn, changeColumn, removeColumn|
|npx sequelize db:migrate:undo| 마이그레이션을 취소한다.|
|npx sequelize db:drop|데이터베이스를 삭제한다.|
|||


<br>

***



<br>

## ✔ Sequelize migration 설정

<br>

|설정|설명|
|:---:|:---:|
|type : |데이터의 타입을 명시해준다.|
|primaryKey : | 해당 컬럼을 primaryKey로 지정한다.|
|allowNull : | 데이터 여부를 판단한다. |
|autoIncrement : | 자동으로 인덱스 값을 넣어준다. |
|unique : | 해당 컬럼 데이터의 중복 여부를 판단한다.|
|defaultValue : | 데이터가 들어오지 않으면 설정해둔 디폴트 값을 넣어준다. |
|references :<br>{model:"모델명",key:"컬럼명"}|해당 컬럼이 어느 테이블에서 참조되었는지 명시해준다.|
|onDelete: "cascade"|상위 모델(references)의 컬럼 값이 삭제되면 해당 로우도 같이 삭제된다.|
|||


## ✔ Sequelize 기타 예문

```js
findOneByUserId = async(postId) => {

        try {
            return await Posts.findOne({
                attributes:{
                    exclude:["updatedAt"]
                },
                where:{postId:postId},
                include : [{
                    model:Todos,
                    attributes:[
                        "todoId",
                        "postId",
                        "content",
                        "done",
                        "createdAt",
                    ]
                }]

            });
        } catch (error) {
            throw new Error(error)
        }
}

```
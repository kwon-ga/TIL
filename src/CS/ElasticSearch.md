## ✔ Elastic Search

<br>

### ✅ Elastic Search 란 ?

<br>

java 오픈소스 분산 검색 엔진이다.  
데이터 저장소의 개념이 아니라 MySQL 같은 데이터베이스를 대체할 수 없다.

방대한 양의 데이터를 거의 실시간으로 저장, 검색, 분석할 수 있다.

Elastic Search는 검색을 위해 단독으로 사용되기도 하며, ELK( ElasticSearch / Logstatsh / Kibana )스택으로 사용되기도 한다.

<br>

### ✅ ELK( ElasticSearch / Logstatsh / Kibana )

<br>

ELK는 분석 및 저장 기능을 담당하는 Elastic Search, 수집 기능을 담당하는 Logstash, 시각화를 담당하는 Kibana의 앞글자를 딴 단어이다.

<br>

ⓐ Logstatsh 
: 다양한 소스(DB, csv파일 등)의 로그 또는 트랜잭션 데이터를 수집, 집계, 파싱하여 Elasticsearch 로 전달

 

ⓑ Elasticsearch 
: Logstatsh로 부터 받은 데이터를 검색 및 집계를 하여 필요한 관심 있는 정보를 획득

 

ⓒ Kibana 
: Elasticsearch의 빠른 검색을 통해 데이터를 시각화 및 모니터링

<br>

### ✅ Elastic Search 와 관계형 DB (RDBMS)의 비교

<br>

|RDBMS|Elastic Search|
|:---:|:---:|
|Schema|Mapping|
|DataBase|Index|
|Table|Type|
|Row|Document|
|Column|Field|

<br>

|Elastic Search|Relational DB|CRUD|
|:---:|:---:|:---:|
|GET|SELECT|READ|
|PUT|UPDATE|UPDATE|
|POST|INSERT|CREATE|
|DELETE|DELETE|DELETE|

<br>

### ✅ Elastic Search 를 왜 사용하는가 ?

<br>

<u> Elasticsearch는 빠르다. </u>  
Elasticsearch는 Lucene을 기반으로 구축되기 때문에, 전체 텍스트 검색에 뛰어나다. Elasticsearch는 또한 거의 실시간 검색 플랫폼이다.  
이것은 문서가 색인될 때부터 검색 가능해질 때까지의 대기 시간이 아주 짧다는 뜻인데 이 대기 시간은 보통 1초이다.  
결과적으로, Elasticsearch는 보안 분석, 인프라 모니터링 같은 시간이 중요한 사용 사례에 이상적이다.

<u> Elasticsearch는 본질상 분산적이다. </u>  
Elasticsearch에 저장된 문서는 샤드라고 하는 여러 다른 컨테이너에 걸쳐 분산되며, 이 샤드는 복제되어 하드웨어 장애 시에 중복되는 데이터 사본을 제공한다.   
Elasticsearch의 분산적인 특징은 수백 개(심지어 수천 개)의 서버까지 확장하고 페타바이트의 데이터를 처리할 수 있게 해준다.

<u> Elasticsearch는 광범위한 기능 세트와 함께 제공된다. </u>   
속도, 확장성, 복원력뿐 아니라, Elasticsearch에는 데이터 롤업, 인덱스 수명 주기 관리 등과 같이 데이터를 훨씬 더 효율적으로 저장하고 검색할 수 있게 해주는 강력한 기본 기능이 다수 탑재되어 있다.

<u> Elastic Stack은 데이터 수집, 시각화, 보고를 간소화한다. </u>  
Beats와 Logstash의 통합은 Elasticsearch로 색인하기 전에 데이터를 훨씬 더 쉽게 처리할 수 있게 해준다.  
Kibana는 Elasticsearch 데이터의 실시간 시각화를 제공하며, UI를 통해 애플리케이션 성능 모니터링(APM), 로그, 인프라 메트릭 데이터에 신속하게 접근할 수 있다.


## Middleware 예제
<br><br>

미들웨어를 호출한다.
```js
router.get('/users/me',authMiddleware, async (req,res)=>{
    console.log(res.locals)
    res.status(200).send();

})
```
/users/me 경로로 호출하면 authMiddleware를 먼저 호출하고 콜백 함수를 실행한다.


<br>

```js
//auth-middleware.js
const jwt = require('jsonwebtoken');
const User = require('../schemas/user.js');

module.exports = (req,res,next) => {
    const {authorization} = req.headers;
    const [tokenType,tokenValue] = authorization.split(' ');
    console.log(tokenValue);

    if(tokenType !== 'Bearer'){
        res.status(401).send({errorMessage:'로그인 후 사용하세요'});
        return;
    }

    try{
        const {userId} = jwt.verify(tokenValue,'kwongakey');
        console.log(userId);

        User.findById(userId).exec().then((user)=>{
            res.locals.user = user;
            next();
        });
        
    }catch(error){
        res.status(401).send({errorMessage:'로그인 후 사용하세요'});
        return;
    }
}

```
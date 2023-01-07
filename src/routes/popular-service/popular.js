const Router = require('express-router');
const router = Router();

router.get('/',(req,res)=>{
   res.send('hello');
});

module.exports = router;
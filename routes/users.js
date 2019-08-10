let express=require('express');
let router=express.Router();

/*GET user 清单列表*/
router.get('/',(req,res,next)=>{
  res.send( '用资源响应 ');
});
router.get('/cool',(req,res,next)=>{
  res.send('你好酷');
});
module.exports=router;

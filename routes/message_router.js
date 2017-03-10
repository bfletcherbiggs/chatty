var express = require('express')
var router = express.Router()

var messages = []

router.get('/', function(req,res,next){
  res.status(200).json({messages:messages})
})

router.post('/',function(req,res,next){
  messages.push({message:req.body.message, time: new Date()})
  res.status(200).json({messages:messages})
})




module.exports = router;

var express = require('express')
var bodyParser = require('body-parser')

var app = express();

var messageRouter = require('./routes/message_router')

app.use(express.static('assets'))
app.use(bodyParser.json())
app.use('/messages', messageRouter)




app.listen(3000)

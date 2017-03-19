let express = require('express')
let bodyParser = require('body-parser')
let mongodb = require('mongodb')

let app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

let port = 8080

app.listen(port)

console.log('Server running on port: ' + port)

app.get('/', function(req, res) {
    res.send({
        msg: 'Hello World!'
    })
})

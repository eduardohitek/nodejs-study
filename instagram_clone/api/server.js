let express = require('express')
let bodyParser = require('body-parser')
let mongodb = require('mongodb')
let objectID = require('mongodb').ObjectID

let app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

let port = 8080

app.listen(port)

let db = new mongodb.Db(
    'instagram',
    new mongodb.Server('localhost', 27017, {}), {}
)

console.log('Server running on port: ' + port)

app.get('/', function(req, res) {
    res.send({
        msg: 'Hello World!'
    })
})

app.post('/api', function(req, res) {
    let dados = req.body

    db.open(function(err, mongoclient) {
        mongoclient.collection('postagens', function(err, collection) {
            collection.insert(dados, function(err, records) {
                if (err) {
                    res.json(err)
                } else {
                    res.json(records)
                }
                mongoclient.close()
            })
        })
    })
})

app.get('/api', function(req, res) {

    db.open(function(err, mongoclient) {
        mongoclient.collection('postagens', function(err, collection) {
            collection.find().toArray(function(err, results) {
                if (err) {
                    res.json(err)
                } else {
                    res.json(results)
                }
                mongoclient.close()
            })
        })
    })
})

app.get('/api/:id', function(req, res) {

    db.open(function(err, mongoclient) {
        mongoclient.collection('postagens', function(err, collection) {
            collection.find(objectID(req.params.id)).toArray(function(err, results) {
                if (err) {
                    res.json(err)
                } else {
                    res.status(500).json(results)
                }
                mongoclient.close()
            })
        })
    })
})

app.put('/api/:id', function(req, res) {

    db.open(function(err, mongoclient) {
        mongoclient.collection('postagens', function(err, collection) {
            collection.update({
                    _id: objectID(req.params.id)
                }, {
                    $set: {
                        titulo: req.body.titulo
                    }
                }, {},
                function(err, records) {
                    if (err) {
                        res.json(err)
                    } else {
                        res.json(records)
                    }
                    mongoclient.close()
                }
            )
        })
    })
})


app.delete('/api/:id', function(req, res) {

    db.open(function(err, mongoclient) {
        mongoclient.collection('postagens', function(err, collection) {
            collection.remove({
                _id: objectID(req.params.id)
            }, function(err, records) {
                if (err) {
                    res.json(err)
                } else {
                    res.json(records)
                }
                mongoclient.close()
            })
        })
    })
})

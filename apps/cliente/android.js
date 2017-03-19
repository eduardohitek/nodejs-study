let http = require('http')

let opcoes = {
    hostname: 'localhost',
    port: 1717,
    path: '/teste',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

let html = 'nome=Hitek'
let json = {
    nome: 'Hitek'
}
let string_json = JSON.stringify(json)

let buffer_corpo_responde = []

let req = http.request(opcoes, function(res) {
    res.on('data', function(pedaco) {
        buffer_corpo_responde.push(pedaco)
    })

    res.on('end', function(pedaco) {
        let corpo_response = Buffer.concat(buffer_corpo_responde).toString()
        console.log(corpo_response)
        console.log(res.statusCode)
    })

})

req.write(string_json)
req.end()

var pg = require('pg');

module.exports = function() {

    var config = {
        user: 'node', //env var: PGUSER
        database: 'portal_noticias', //env var: PGDATABASE
        password: 'node', //env var: PGPASSWORD
        host: 'localhost', // Server hosting the postgres database
        port: 5432, //env var: PGPORT
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };

    var pool = new pg.Pool(config);
    return pool;

}

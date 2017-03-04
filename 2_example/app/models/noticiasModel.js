module.exports = function() {

    this.getNoticias = function(pool, callback) {
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query('select * from noticias', callback);

            done(err);

            if (err) {
                return console.error('error running query', err);
            }
        });


    }

    this.getNoticia = function(pool, callback) {
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query('select * from noticias where id_noticias = 1', callback);

            done(err);

            if (err) {
                return console.error('error running query', err);
            }
        });


    }

    return this;

}

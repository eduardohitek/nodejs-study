module.exports = function() {

        this.salvarNoticia = function(noticia, pool, callback) {
          console.log(noticia);
          console.log(noticia.titulo);
          console.log(noticia.noticia);

            pool.connect(function(err, client, done) {
                    if (err) {
                        return console.error('error fetching client from pool', err);
                    }
                    client.query('insert into noticias(titulo, noticia) values($1, $2)',
                    [noticia.titulo, noticia.noticia], callback);
                    console.log(client);

                        done(err);

                        if (err) {
                            return console.error('error running query', err);
                        }
                    });


            }


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

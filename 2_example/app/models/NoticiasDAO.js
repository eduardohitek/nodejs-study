function NoticiasDAO(pool) {
  this._pool = pool;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('select * from noticias order by data_criacao desc', callback);

        done(err);

        if (err) {
            return console.error('error running query', err);
        }
    });
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
    this._pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('select * from noticias where id_noticias = $1',[id_noticia], callback);

        done(err);

        if (err) {
            return console.error('error running query', err);
        }
    });
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {

    this._pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('insert into noticias(titulo, noticia, resumo, autor, data_noticia) values($1, $2, $3, $4, $5)',
        [noticia.titulo, noticia.noticia, noticia.resumo, noticia.autor, noticia.data_noticia], callback);

        done(err);

        if (err) {
            return console.error('error running query', err);
        }
    });
}

NoticiasDAO.prototype.getUltimasNoticias = function(qtd, callback) {
  this._pool.connect(function(err, client, done){
    if (err) {
      return console.error('Error on creating connection', err);
    }
    client.query('select * from noticias order by data_criacao desc limit $1', [qtd], callback);

    done(err);

    if (err) {
      return console.error('error running query', err);
    }
  });
}



module.exports = function() {

    return NoticiasDAO;

}

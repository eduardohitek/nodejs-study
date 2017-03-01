module.exports = function(app) {



    app.get('/noticias', function(req, res) {

          var pool = app.config.dbConnection();

        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query('select * from noticias', function(err, result) {
                //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
                done(err);

                if (err) {
                    return console.error('error running query', err);
                }
                res.render("noticias/noticias", {noticias : result.rows});
                //output: 1
            });
        });

    });
};

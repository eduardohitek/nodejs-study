module.exports = function(app) {



    app.get('/noticias', function(req, res) {

          var pool = app.config.dbConnection();
          var noticiasDAO = new app.app.models.NoticiasDAO(pool);

          noticiasDAO.getNoticias(function(err, result) {
              res.render("noticias/noticias", {noticias : result.rows});
          });

    });
};

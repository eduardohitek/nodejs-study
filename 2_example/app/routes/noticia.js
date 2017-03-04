module.exports = function(app) {



    app.get('/noticia', function(req, res) {

          var pool = app.config.dbConnection();
          var noticiasDAO = new app.app.models.NoticiasDAO(pool);

          noticiasDAO.getNoticia(function(err, result) {
              res.render("noticias/noticia", {noticias : result.rows});
          });

    });
};

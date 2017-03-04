module.exports = function(app) {



    app.get('/noticia', function(req, res) {

          var pool = app.config.dbConnection();
          var noticiasModel = app.app.models.noticiasModel;

          noticiasModel.getNoticia(pool, function(err, result) {
              res.render("noticias/noticia", {noticias : result.rows});
          });

    });
};

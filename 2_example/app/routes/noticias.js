module.exports = function(app) {



    app.get('/noticias', function(req, res) {

          var pool = app.config.dbConnection();
          var noticiasModel = app.app.models.noticiasModel;

          noticiasModel.getNoticias(pool, function(err, result) {
              res.render("noticias/noticias", {noticias : result.rows});
          });

    });
};

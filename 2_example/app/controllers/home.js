var moment = require('moment');

module.exports.index = function(app, req, res) {

  var pool = app.config.dbConnection();
  var noticiasDAO = new app.app.models.NoticiasDAO(pool);

    noticiasDAO.getUltimasNoticias(5, function(err, result){
      res.render("home/index", {noticias : result.rows, moment : moment});
    });
}

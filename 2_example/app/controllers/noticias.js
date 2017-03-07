var moment = require('moment');

module.exports.get_noticias = function(app, req, res) {

    var pool = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(pool);

    noticiasDAO.getNoticias(function(err, result) {
        res.render("noticias/noticias", {
            noticias: result.rows, moment : moment
        });
    });

}

module.exports.get_noticia = function(app, req, res) {

    var pool = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(pool);
    var id_noticia = req.query.id_noticia;

    noticiasDAO.getNoticia(id_noticia, function(err, result) {
        res.render("noticias/noticia", {
            noticia: result.rows, moment : moment
        });
    });


}

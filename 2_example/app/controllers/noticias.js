module.exports.get_noticias = function(app, req, res) {

    var pool = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(pool);

    noticiasDAO.getNoticias(function(err, result) {
        res.render("noticias/noticias", {
            noticias: result.rows
        });
    });

}

module.exports.get_noticia = function(app, req, res) {

    var pool = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(pool);

    noticiasDAO.getNoticia(function(err, result) {
        res.render("noticias/noticia", {
            noticias: result.rows
        });
    });


}

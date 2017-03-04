module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res) {
      var noticia = req.body;
        // res.send(noticias);


        var pool = app.config.dbConnection();
        var noticiasDAO = new app.app.models.NoticiasDAO(pool);

        noticiasDAO.salvarNoticia(noticia, function(err, result) {
            res.redirect('/noticias');
        });
    });
};

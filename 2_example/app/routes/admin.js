module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;

        req.assert('titulo', 'Título é Obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é Obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é Obrigatório').notEmpty().isDate({
            format: 'YYYY-MM-DD'
        });
        req.assert('noticia', 'Notícia é Obrigatório').notEmpty();

        let erros = req.validationErrors();

        if(erros){
          res.render("admin/form_add_noticia");
          return;
        }

        var pool = app.config.dbConnection();
        var noticiasDAO = new app.app.models.NoticiasDAO(pool);

        noticiasDAO.salvarNoticia(noticia, function(err, result) {
            res.redirect('/noticias');
        });
    });
};

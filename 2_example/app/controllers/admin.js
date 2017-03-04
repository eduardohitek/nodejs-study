module.exports.formulario_inclusao_noticia = function(app, req, res) {
    res.render("admin/form_add_noticia", {
        validacao: {},
        noticia: {}
    });

}

module.exports.salvar_noticias = function(app, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Título é Obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é Obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é Obrigatório e deve ser no formato correto').notEmpty().isDate({
        format: 'YYYY-MM-DD'
    });
    req.assert('noticia', 'Notícia é Obrigatório').notEmpty();

    let erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", {
            validacao: erros,
            noticia: noticia
        });
        return;
    }

    var pool = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(pool);

    noticiasDAO.salvarNoticia(noticia, function(err, result) {
        res.redirect('/noticias');
    });
}

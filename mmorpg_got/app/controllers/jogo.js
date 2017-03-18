module.exports.jogo = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Usuário precisa fazer Login');
        return
    }

    let msg = ''
    if (req.query.msg != '') {
        msg = req.query.msg
    }

    let usuario = req.session.usuario
    let casa = req.session.casa
    let connection = application.config.dbConnection;

    let JogoDAO = new application.app.models.JogoDAO(connection);
    JogoDAO.iniciaJogo(res, usuario, casa, msg);


}

module.exports.sair = function(application, req, res) {
    req.session.destroy(function(err) {
        res.render('index', {
            validacao: {},
            dadosForm: {}
        });
    });
}

module.exports.suditos = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Usuário precisa fazer Login');
        return
    }
    res.render('aldeoes', {
        validacao: {}
    });
}

module.exports.pergaminhos = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Usuário precisa fazer Login');
        return
    }

    let connection = application.config.dbConnection;
    let JogoDAO = new application.app.models.JogoDAO(connection);

    let usuario = req.session.usuario;
    JogoDAO.getAcoes(usuario, res);

}

module.exports.ordenar_acao_sudito = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Usuário precisa fazer Login');
        return
    }
    console.log(req.session.autorizado)
    var dadosForm = req.body;

    req.assert('acao', 'Ação deve ser informada').notEmpty()
    req.assert('quantidade', 'Quantidade deve ser informada').notEmpty()

    var erros = req.validationErrors()

    if (erros) {
        res.redirect('jogo?msg=A');
        return;
    }

    let connection = application.config.dbConnection;
    let JogoDAO = new application.app.models.JogoDAO(connection);

    dadosForm.usuario = req.session.usuario;
    JogoDAO.acao(dadosForm);

    res.redirect('jogo?msg=B');
}

module.exports.revogar_acao = function(application, req, res) {
    let url_query = req.query;

    let connection = application.config.dbConnection;
    let JogoDAO = new application.app.models.JogoDAO(connection);

    let _id = url_query.id_acao
    JogoDAO.revogarAcao(_id, res)
}

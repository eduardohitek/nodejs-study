module.exports.jogo = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Usuário precisa fazer Login');
        return
    }

    let usuario = req.session.usuario
    let casa = req.session.casa
    let connection = application.config.dbConnection;

    let JogoDAO = new application.app.models.JogoDAO(connection);
    JogoDAO.iniciaJogo(res, usuario, casa);


}

module.exports.sair = function(application, req, res) {
    req.session.destroy(function(err) {
        res.render('index', {
            validacao: {},
            dadosForm: {}
        });
    });
}

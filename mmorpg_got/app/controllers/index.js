module.exports.home = function(application, req, res){
  res.render('index', {validacao: {}, dadosForm: {}});
}

module.exports.autenticar = function(application, req, res){
  let dadosForm = req.body;

  req.assert('usuario', 'O Campo Usuário não poder ser vazio').notEmpty();
  req.assert('senha', 'O Campo Senha não poder ser vazio').notEmpty();

  let erros = req.validationErrors();

  if(erros){
    res.render('index', {validacao: erros, dadosForm: dadosForm});
    return;
  }

  let connection = application.config.dbConnection;
  let UsuariosDAO = new application.app.models.UsuariosDAO(connection);

  UsuariosDAO.autenticar(dadosForm, req, res);
}

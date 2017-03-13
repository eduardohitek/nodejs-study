module.exports.cadastro = function(application, req, res){
  res.render('cadastro', {validacao: {}, dadosForm: {}});
}


module.exports.cadastrar = function(application, req, res){
  let dadosForm = req.body;

  req.assert('nome', 'Nome não pode ser Vazio').notEmpty();
  req.assert('usuario', 'Usuário não pode ser Vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser Vazio').notEmpty();
  req.assert('casa', 'Casa não pode ser Vazio').notEmpty();

  let erros = req.validationErrors();

  if(erros){
    res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
    return
  }

  res.send("Teste Cadastro!");
}

module.exports.iniciaChat = function(application, req, res){
  let dadosForm = req.body;

  req.assert('apelido', 'Nome ou Apelido é Obrigatório').notEmpty();
  req.assert('apelido', 'Nome ou Apelido deve ter entre 3 e 15 caracteres').len(3, 15);

  let erros = req.validationErrors();

  if(erros){
    res.render("index", {validacao : erros})
    return;
  }

  res.render("chat");
}

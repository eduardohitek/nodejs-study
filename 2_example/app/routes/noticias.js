module.exports = function(app) {

    app.get('/noticias', function(req, res) {

        app.app.controllers.noticias.get_noticias(app, req, res);

    });

    app.get('/noticia', function(req, res) {
        app.app.controllers.noticias.get_noticia(app, req, res);


    });
};

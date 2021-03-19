module.exports = function(app){
    app.post('/chat', function(request, response){
        app.app.controllers.chat.iniciaChat(app, request, response);
    });

    app.get('/chat', function(request, response){
        app.app.controllers.chat.iniciaChat(app, request, response);
    });    
}
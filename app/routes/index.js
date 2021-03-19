module.exports = function(app){
    app.get('/', function(request, response){
        app.app.controllers.index.home(app, request, response);
    });
}
var controller = require('./controller')
var path = require('path')


module.exports = function(app){
    app.get('/item', function(request, response){
        controller.getAlls(request, response);
    })
    app.post('/item', function(request, response){
        controller.createItem(request, response);
    })
    app.get('/item/:id', function(request, response){
        controller.getsItem(request, response);
    })
    app.put('/item/:id', function(request, response){
        controller.editItem(request, response);
    })
    app.delete('/item/:id', function(request, response){
        controller.deleteItem(request, response)
    })
    app.post('/item/:id/comment', function(request, response){
        controller.createsComment(request, response)
    })
    app.delete('/item/:id/comment/:cid', function(request, response){
        controller.deleteComment(request, response)
    })

    app.all("*", (request, response, next)=>{
        response.sendFile(path.resolve(__dirname+ "../../public/dist/public/index.html"))
    })

}

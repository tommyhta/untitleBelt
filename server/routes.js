var controller = require('./controller')
var path = require('path')

// change:
// item

module.exports = function(app){
    app.get('/item', function(request, response){
        controller.getAlls(request, response);
    })
    app.post('/item', function(request, response){
        controller.createItem(request, response);
    })
    app.get('/item/:id', function(request, response){
        controller.getItems(request, response);
    })
    app.put('/item/:id', function(request, response){
        controller.editItem(request, response);
    })
    app.delete('/item/:id', function(request, response){
        controller.deleteItem(request, response)
    })
    app.all("*", (request, response, next)=>{
        response.sendFile(path.resolve(__dirname+ "../../public/dist/public/index.html"))
    })
}

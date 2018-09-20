var mongoose = require('mongoose')
// call the ITEM model

module.exports = {
    getAlls : function(request, response){
        Item.find({}, function(error, items){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Items: items})
            }
        })
    },
    createItem : function(request, response){
        Item.create(request.body, function(error, item){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Items: item})
            }
        })
    },
    getItems: function(request, response){
        Item.findOne({_id: request.params.id}, function(error, item){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Items: item})
            }
        })
    },
    
    editItem: function(request, response){
        Item.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success"})
            }
        })
    },
    deleteItem: function(request, response){
        Item.remove({_id: request.params.id}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success"})
            }
        })
    }  
}
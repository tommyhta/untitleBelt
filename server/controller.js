var mongoose = require('mongoose')
// call the ITEM model
var Movie = mongoose.model("Movie")
var Review = mongoose.model("Review")

module.exports = {
    getAlls : function(request, response){
        Movie.find({}, function(error, items){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Items: items})
            }
        })
    },
    createItem : function(request, response){
        if(!request.body.reviews){
            response.json({ServerMessage: "Error", Error:"New Movie must have a review"})
        } else{
            Movie.create(request.body, function(error, item){
                if(error){
                    response.json({ServerMessage: "Error", Error: error})
                }else{
                    response.json({ServerMessage: "Success", Items: item})
                }
            })
        }
    },
    getsItem: function(request, response){
        Movie.findOne({_id: request.params.id}, function(error, item){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success", Items: item})
            }
        })
    },
    
    editItem: function(request, response){
        Movie.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success"})
            }
        })
    },
    deleteItem: function(request, response){
        Movie.remove({_id: request.params.id}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                response.json({ServerMessage: "Success"})
            }
        })
    },
    createsComment: function(request, response){
        Review.create(request.body, function(error, comment){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                Movie.findOneAndUpdate({_id: request.params.id}, {$push: {reviews: comment}}, function(error, item){
                    if(error){
                        response.json({ServerMessage: "Error", Error:error})
                    }else{
                        response.json({ServerMessage: "Success", Item: item})
                    }
                })
            }
        })
    },
    deleteComment: function(request, response){
        Review.remove({_id: request.params.cid}, function(error){
            if(error){
                response.json({ServerMessage: "Error", Error: error})
            }else{
                Movie.findOneAndUpdate({_id:request.params.id}, {$pull: {reviews:{_id:request.params.cid}}}, function(error, item){
                    if(error){
                        response.json({ServerMessage: "Error", Error: error})
                    }else{
                        response.json({ServerMessage: "Success", Item: item})
                    }
                })
            }
        })
    }  

}
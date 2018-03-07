
module.exports = {
    middle: function(req,res,next){
        console.log('im request level middleware')
        next()
    }
}   
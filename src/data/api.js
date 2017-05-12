const movies = require('./movies.json');
exports.getMovies = function(req, res){
    console.log("getMovies");
    res.send(200, movies);
};
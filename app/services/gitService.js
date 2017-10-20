var github = require('octonode');


var api = {};


api.repository = (req, res) => {

     var client = github.client();
     
     var ghrepo = client.repo('CaioMichelSantos/apiKeepi');
     
    ghrepo.contents('', "master", ( err , status , body , headers ) => {
        console.log(status); 

    });
};

module.exports = api;
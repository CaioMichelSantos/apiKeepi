var github = require('octonode');

var api = {};

api.repository = (req, res) => {
    let git = req.body;
    let client = github.client();
    let ghrepo = client.repo(git.nameAuthor + '/' + git.repository);
     
    ghrepo.contents('', git.branch, ( err , status , body , headers ) => {
        res.json(status);
    });

};

module.exports = api;
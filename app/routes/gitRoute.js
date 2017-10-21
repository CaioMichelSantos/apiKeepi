module.exports = app => {
	
	var api = app.services.gitService;

	app.route('/v1/git/')
		.post(api.repository)

};
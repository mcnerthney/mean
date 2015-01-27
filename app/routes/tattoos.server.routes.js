'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	tattoos = require('../../app/controllers/tattoos.server.controller');

module.exports = function(app) {
	// Tattoos Routes
	app.route('/tattoos')
		.get(tattoos.list)
		.post(users.requiresLogin, tattoos.create);

	app.route('/tattoos/:tattooId')
		.get(tattoos.read)
		.put(users.requiresLogin, tattoos.hasAuthorization, tattoos.update)
		.delete(users.requiresLogin, tattoos.hasAuthorization, tattoos.delete);

	// Finish by binding the article middleware
	app.param('tattooId', tattoos.tattooByID);
};
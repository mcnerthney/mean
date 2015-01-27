'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Tattoo = mongoose.model('Tattoo'),
	_ = require('lodash');

/**
 * Create a article
 */
exports.create = function(req, res) {
	var tattoo = new Tattoo(req.body);
	tattoo.user = req.user;

	tattoo.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(tattoo);
		}
	});
};

/**
 * Show the current article
 */
exports.read = function(req, res) {
	res.json(req.tattoo);
};

/**
 * Update a article
 */
exports.update = function(req, res) {
	var tattoo = req.tattoo;

    tattoo = _.extend(tattoo, req.body);

    tattoo.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(tattoo);
		}
	});
};

/**
 * Delete an article
 */
exports.delete = function(req, res) {
	var tattoo = req.tattoo;

    tattoo.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(tattoo);
		}
	});
};

/**
 * List of Articles
 */
exports.list = function(req, res) {
    Tattoo.find().sort('-created').populate('user', 'displayName').exec(function(err, tattoos) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(tattoos);
		}
	});
};

/**
 * Article middleware
 */
exports.tattooByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Tattoo is invalid'
		});
	}

	Tattoo.findById(id).populate('user', 'displayName').exec(function(err, tattoo) {
		if (err) return next(err);
		if (!tattoo) {
			return res.status(404).send({
  				message: 'Tattoo not found'
  			});
		}
		req.tattoo = tattoo;
		next();
	});
};

/**
 * Article authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.tattoo.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
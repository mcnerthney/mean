'use strict';

// Configuring the Articles module
angular.module('tattoo').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Tattoos', 'tattoos', 'dropdown', '/tattoos(/create)?');
		Menus.addSubMenuItem('topbar', 'tattoos', 'List Tattoos', 'tattoos');
		Menus.addSubMenuItem('topbar', 'tattoos', 'New Tattoo', 'tattoos/create');
	}
]);
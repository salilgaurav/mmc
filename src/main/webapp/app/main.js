// This is for configuring requireJs stuffs.

// RequireJS paths and shim configuration.
// Declarative-only: does not invoke any actual code.
requirejs.config({
	baseUrl: 'app',
	paths: {
		'angular': '../bower_components/angular/angular',
		'text': '../bower_components/text/text',
		'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router',
		'almond': '../bower_components/almond/almond'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'uiRouter':{
			deps: ['angular']
		}
	}
});
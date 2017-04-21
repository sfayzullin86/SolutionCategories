jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SOLCATSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"SolutionCategories/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"SolutionCategories/test/integration/pages/App",
	"SolutionCategories/test/integration/pages/Browser",
	"SolutionCategories/test/integration/pages/Master",
	"SolutionCategories/test/integration/pages/Detail",
	"SolutionCategories/test/integration/pages/Create",
	"SolutionCategories/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "SolutionCategories.view."
	});

	sap.ui.require([
		"SolutionCategories/test/integration/MasterJourney",
		"SolutionCategories/test/integration/NavigationJourney",
		"SolutionCategories/test/integration/NotFoundJourney",
		"SolutionCategories/test/integration/BusyJourney",
		"SolutionCategories/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});
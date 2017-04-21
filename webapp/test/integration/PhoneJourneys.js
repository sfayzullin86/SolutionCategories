jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"SolutionCategories/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"SolutionCategories/test/integration/pages/App",
	"SolutionCategories/test/integration/pages/Browser",
	"SolutionCategories/test/integration/pages/Master",
	"SolutionCategories/test/integration/pages/Detail",
	"SolutionCategories/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "SolutionCategories.view."
	});

	sap.ui.require([
		"SolutionCategories/test/integration/NavigationJourneyPhone",
		"SolutionCategories/test/integration/NotFoundJourneyPhone",
		"SolutionCategories/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});
sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/MessageShow"
], (Button, MessageToast,MessageShow) => {
	"use strict";

	new Button({
		text: "Ready...",
		press() {
			MessageToast.show("Hello World!");
		}
	}).placeAt("content");

});
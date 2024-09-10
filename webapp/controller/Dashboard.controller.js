sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.isat.isatui5.controller.Dashboard", {
        onInit: function () {
            
        },

        onClick:function(){
            var Route = this.getOwnerComponent().getRouter();
            Route.navTo("RouteHomeScreen")
        }
        
    });
});

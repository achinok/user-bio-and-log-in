"use strict"
{
    let pro ={
        templateUrl : "profile.html",
        controller: function(userService, $location) {
            let vm = this;
            vm.user = userService.getUser();
            vm.editProfile = function() {
                $location.path("/edit");
            }
        }
    }
    pro.$inject = ["userService", "$location"];
    angular
        .module("profile")
        .component("pro", pro);
        
}
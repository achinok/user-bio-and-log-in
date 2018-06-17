"use strict";
{
    let edit = {
        templateUrl:"edit.html",
        controller: function(userService, $location){
            let vm = this;
            vm.user = userService.getUser();
            vm.update = function(){
                userService.setUser(vm.user);
                $location.path("/profile");
            }
        }
    }
    edit.$inject = ["userService", "$location"];

    angular
        .module("profile")
        .component("edit", edit);
}
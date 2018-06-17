"use strict";
{
    function userService(){
        let user = {
            name: "Ben",
            contact: "BenBlodgetteTheFourth.com",
            bio: "Well rounded nerd"
        }
    const getUser = function(){
        return user;
    };

    const setUser = function(newUser) {
        user = newUser;
    };
 return{
     getUser,
     setUser
 }   
}

angular
.module("profile")
.factory("userService", userService)
}
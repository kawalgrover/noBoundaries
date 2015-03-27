'use strict';

app.controller('LoginModalCtrl', function ($scope, User) {
    this.cancel = $scope.$dismiss;

    this.submit = function (email, password) {
        User.login(email, password).then(function (user) { // This part will be handled by oAuth
            $scope.$close(user);
        });
    };
});

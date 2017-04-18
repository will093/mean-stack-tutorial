angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        { name: 'C# for sociopaths', featured: true, published: new Date('1/1/2001') },
        { name: 'C# for not sociopaths', featured: false, published: new Date('1/6/2005') }
    ];
});
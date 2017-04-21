angular.module('app').factory('mvNotifier', function(toastr) {
    return {
        notify: function(msg) {
            toastr.success(msg);
            console.log(msg);
        }
    }
})
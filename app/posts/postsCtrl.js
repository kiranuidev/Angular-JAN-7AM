(function () {
    function postsCtrl(postsSvc) {
        var vm = this;
        postsSvc.getPosts()
            .then(function (response) {
                vm.posts = response.data.posts;
            })
            .catch(function (response) {

            });

    }
    angular.module("posts").controller("postsCtrl", ["postsSvc", postsCtrl]);
})();
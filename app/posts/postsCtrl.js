(function () {
    function postsCtrl(postsSvc,$state) {
        console.log($state);
        var vm = this;
        postsSvc.getPosts()
            .then(function (response) {
                vm.posts = response.data.posts;
            })
            .catch(function (response) {

            });

    }
    angular.module("posts").controller("postsCtrl", ["postsSvc","$state", postsCtrl]);
})();
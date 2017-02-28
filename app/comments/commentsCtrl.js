(function () {
    function commentsCtrl(commentsSvc) {
        var vm = this;
       // vm.comments = commentsSvc.getComments();
        // vm.comments = [{
        //     "blogId": "1",
        //     "commentId": "cm1",
        //     "commentText": "Your Blog is awesome"
        // },
        // {
        //     "blogId": "1",
        //     "commentId": "cm2",
        //     "commentText": "Hey Kiran you made it clear.... Thanks"
        // }
        // ];
        commentsSvc.getCommentsFromApi()
                .then(function (response) {
                console.log(response);
                vm.comments = response.data.comments;
            })
            //handle negative response
            .catch(function (response) {
                console.log(response);
            })
            // handle everything.
            .finally(function (response) {
                console.log(response);
            });
    }
    angular.module("comments")
        .controller("commentsCtrl", ["commentsSvc",commentsCtrl]);

})();
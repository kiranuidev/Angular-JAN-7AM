(function () {
    function commentsSvc($http) {
        this.getComments = function () {
            return [{
                "blogId": "1",
                "commentId": "cm1",
                "commentText": "Your Blog is awesome"
            },
            {
                "blogId": "1",
                "commentId": "cm2",
                "commentText": "Hey Kiran you made it clear.... Thanks"
            }
            ];
        };

        this.getCommentsFromApi=function(){
            return $http.get("api/comments.json");
        };
    }

    angular.module("comments")
        .service("commentsSvc", ["$http",commentsSvc]);
})();
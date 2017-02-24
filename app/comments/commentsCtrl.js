(function(){
function commentsCtrl(){
    var vm=this;
    vm.comments =[{
        "blogId":"1",
        "commentId":"cm1",
        "commentText":"Your Blog is awesome"
    },
    {
        "blogId":"1",
        "commentId":"cm2",
        "commentText":"Hey Kiran you made it clear.... Thanks"
    }
    ];
}
angular.module("comments")
.controller("commentsCtrl",[commentsCtrl]);

})();
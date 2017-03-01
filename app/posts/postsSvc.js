(function(){
    function postsSvc($http){
     this.getPosts = function(){
        return $http.get("api/posts.json");
     };
    }
    angular.module("posts")
    .service("postsSvc",["$http",postsSvc])
})();
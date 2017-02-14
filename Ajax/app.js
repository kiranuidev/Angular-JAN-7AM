(
    function () {
        $(document).ready(function () {
            makeAjaxCall();
        });

        function makeAjaxCall() {
            $.ajax({
                url: "http://google.com",
                method: "GET",
                success: function (response) {
                    console.log(response);
                },
                error: function (response) {
                    console.log(response);
                }
               
            });
        }
    }
)();

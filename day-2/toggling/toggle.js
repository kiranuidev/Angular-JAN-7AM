//document.ready.
(function () {
    'use strict';
    $(document).ready(function () {
        $('#btnToggle').bind("click",toggleContent);
         $('#btnShow').bind("click",showContent);
         $('#btnHide').bind("click",hideContent);

    });
    
    function toggleContent(){
        $("#divShow").toggle();
        $(".showdata").toggle();
    }
    function showContent(){
         $(".showdata").show();
    }
     function hideContent(){
        $(".showdata").hide();
    }


})();

if (typeof $ != "undefined"){
    ;$(function(){

// flash
        if ($().slide) {
// 
            $("#ibn").slide({titCell:".hd",autoPage: true, autoPlay: true, effect:"fold",easing:"swing", delayTime:800, interTime: 6000, startFun:function(i,c,s){s.find(".bd li").eq(i).addClass("active").siblings().removeClass("active");}});
// 
            $(".date_snews").slide({effect:"top",autoPage: true, autoPlay: true, vis:4, interTime: 5000});

        };
// end flash
// nav
        (function(){
            var $slideNav2 = $("#slideNav2"),
                $currentNav = $slideNav2.find(".current_nav"),
                $slideNavLine2 = $("#slideNavLine2"),
                $el, leftPos, newWidth;
            if($slideNavLine2.length > 0){
                $slideNavLine2.css({
                    "left" : $currentNav.position().left
                }).data("origLeft", $slideNavLine2.position().left);
                $slideNav2.find("li:not('.gt')").hover(function(){
                    $el = $(this);
                    $el.find(".tnav2_sec").stop(true,true).slideDown();
                    leftPos = $el.position().left;
                    newWidth = $el.innerWidth();
                    $slideNavLine2.stop().animate({
                        left: leftPos
                    });
                },function(){
                    $(this).find(".tnav2_sec").slideUp();
                    $slideNavLine2.stop().animate({
                        left: $slideNavLine2.data("origLeft")
                    });
                });
            };
        })();
// end nav

    });
};
// end jq
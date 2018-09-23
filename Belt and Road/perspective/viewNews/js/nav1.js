//加载
$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if (height == 0) {
            $(".navbar-default").css({
                "opacity": "1",
                'background-color': 'rgba(67, 110, 238, 0)',
                'border-bottom': '0px solid white',
                'transition': '0.5s all ease'

            });
            $("#logo").css({
                "opacity": "1",
                'transition': '0.5s all ease'
            });
            $("#bw").css({
                "opacity": "0.5",
                'transition': '0.5s all ease'
            });
        } else {

            $(".navbar-default").css({
                "opacity": "0.8",
                'background-color': 'rgba(67, 110, 238, 0)',
                'border-bottom': '0px solid white',
                'transition': '0.5s all ease'
            });
            $("#logo").css({
                "opacity": "0.5",
                'transition': '0.5s all ease'
            });
            $("#bw").css({
                "opacity": "0.2",
                'transition': '0.5s all ease'
            });
        }

    });

    $("#top").on("mousemove", function () {
        $(".navbar-default").css({
            "opacity": "1",
            'background-color': 'rgba(67, 110, 238, 0.8)',
            'border-bottom': '1px solid white',
            'transition': '0.5s all ease'

        });
        $("#logo").css({
            "opacity": "1",
            'transition': '0.5s all ease'
        });
        $("#bw").css({
            "opacity": "0.5",
            'transition': '0.5s all ease'
        });
    });
    $("#top").on("mouseout", function () {
        var height = $(document).scrollTop()
        if (height == 0) {
            $(".navbar-default").css({
                "opacity": "1",
                'background-color': 'rgba(67, 110, 238, 0)',
                'border-bottom': '0px solid white',
                'transition': '0.5s all ease'

            });
            $("#logo").css({
                "opacity": "1",
                'transition': '0.5s all ease'
            });
            $("#bw").css({
                "opacity": "0.5",
                'transition': '0.5s all ease'
            });
            return;
        }
        $(".navbar-default").css({
            "opacity": "0.8",
            'background-color': 'rgba(67, 110, 238, 0.2)',
            'border-bottom': '0px solid white',
            'transition': '0.5s all ease'
        });
        $("#logo").css({
            "opacity": "0.5",
            'transition': '0.5s all ease'
        });
        $("#bw").css({
            "opacity": "0.2",
            'transition': '0.5s all ease'
        });
    });
});
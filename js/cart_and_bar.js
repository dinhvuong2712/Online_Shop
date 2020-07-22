
var lastscrolltop = 0;
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $('html,body').scrollTop();
        if (scrollTop > lastscrolltop) {
            $('#navbar').css('top', '-80px');
        }
        else {
            $('#navbar').css('top', '0');
        }
        lastscrolltop = scrollTop;
        $(".banner").css('top', scrollTop * 0.5 + 'px');
    });


    
    $('#btnSearch').click(function () {
        $('#searchBg').css('visibility','visible');
        $('#searchBg').css('opacity','1');
        $('.contentSearch').css('margin','0 auto');
    });
    $('.closeSearch').click(function () {
        $('#searchBg').css('visibility','hidden');
        $('#searchBg').css('opacity','0');
        $('.contentSearch').css('margin','100px auto');
    });
    $('.closeSearch').click(function(event) {
        if(event.target == this){
            $(this).$('#searchBg').css('display','none');
        }
    });

    // cart
    $('#butt').click(function () {
        $('#question').css('overflow','hidden');
        $('#question').css('visibility','visible');
        $('#question').css('opacity','1');
        $('.contentBuy').css('margin','100px auto');
    });
    $('.close').click(function () {
        $('#question').css('visibility','hidden');
        $('#question').css('opacity','0');
        $('.contentBuy').css('margin','0 auto');
    });
    $('.close').click(function(event) {
        if(event.target == this){
            $(this).$('#searchBg').css('display','none');
        }
    });
});

////////////////


// search


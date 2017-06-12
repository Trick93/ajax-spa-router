/**
 * ajax load
 */

//config
$.defaultPage = 'main.html';
$.subPagesDirectory = 'views/';
$.mainContent = $('#ui-view');

var url = location.hash.replace(/^#/,"");

if(url != ''){
    jumpUrl(url);
}else{

}

//绑定左侧菜单的点击事件
$(document).on("click",".nav a[href!='#']",function(e){
    e.preventDefault();
    var target = $(e.currentTarget);
    jumpUrl(target.attr("href"));
});

function jumpUrl(url){
    $.ajax({
        type: "GET",
        url: $.subPagesDirectory + url,
        dataType: "html",
        async: false,
        cache: false,
        beforeSend: function(){
            $.mainContent.css({ opacity : 0 });
        },
        success: function(){
            $.mainContent.load($.subPagesDirectory + url,null,function(){
                //window.location.hash = url;
                history.pushState({}, null, "#"+url);
            }).delay(250).animate({ opacity : 1 }, 0);
        }
    });
}

$(window).on("popstate",function(e){
    var url = location.hash.replace(/^#/,"");
    if(url != ''){
        jumpUrl(url);
    }else{

    }
})
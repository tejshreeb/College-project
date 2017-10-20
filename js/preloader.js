var isLoaderRemoved=false;
$.ajax({
    url: "/",
    xhrFields: {
        onprogress: function (e) {
            if (e.lengthComputable) {
                var percent = e.loaded / e.total * 100 + '%';
                //console.log(e.loaded / e.total * 100 + '%');
                $(".load-percent").html(percent);
            }
        }
    },
    success: function (response) {
        removeLoader();
    },
    error: function() {
        removeLoader();
    }
});

function removeLoader() {
    if(isLoaderRemoved)
        return;
    var $loadbg = $("#load-bg");
        $loadbg.velocity({
            scaleX: 2,
            scaleY: 2,
            opacity: 0
        }, {
            duration: 1000,
            //display: "none",
            easeing: "ease-in-out",
            complete: function () {
                $loadbg.remove();
                isLoaderRemoved=true;
            }
        });
}

$(window).load(removeLoader);

setTimeout(removeLoader,30*1000);
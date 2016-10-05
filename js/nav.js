$(document).ready(function () {
    $("a").click(function (e) {
        if ($.isFunction(this.onclick)) {
            return;
        } else {
            $("#cnd-contenu").attr("data-include", $(this).attr("data-link"));
            render();
        }
    });
});

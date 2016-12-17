function render() {
    $("[data-include]").each(function(){
        var that = $(this);
        that.load(that.attr('data-include'), function(){
            that.contents().unwrap();
        }); 
    });
}

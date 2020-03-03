jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

$(document).ready(function() {
    $(".intro").fadeTo(2500, 1);
    $(".fadein").fadeTo(1500, 1);

})

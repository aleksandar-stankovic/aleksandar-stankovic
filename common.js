$(document).ready(function() {
    
    $(function() {
    $("[name=toggler]").each(function(i) {
        $(this).change(function(){
            $('#blk-1, #blk-2, #blk-3, #blk-4').hide();
            divId = 'blk-' + $(this).val();
            $("#"+divId).show('fast');
        });
    });
 });
    $(function() {
    $("[name=toggler]").each(function(i) {
        $(this).change(function(){
            $('.menu-item').css('text-decoration', 'none');
            itemId = 'menu-item' + $(this).val();
            $("#"+itemId).css('text-decoration', 'line-through');
        });
    });
 });
    
    $(".text-wrapper").click(function (e) {
    e.stopPropagation();
    jQuery(this).children('.project_text').toggle();
});
   
    $('.text-wrapper').click(function () {
    var $elem = $(this).children('.more_less');
    $elem.text().trim() === 'Show more' ? $elem.text('Show less'): $elem.text('Show more');
    
});
     
    
});
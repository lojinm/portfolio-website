$('#name').hover(function() {
    $(this).css('color', '#ff0000');
    $(this).append('<span class="emoji">👋</span>');
}).mouseleave(function() {
    $(this).css('color', '#000');
    $('.emoji').remove();
});
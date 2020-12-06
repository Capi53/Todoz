// $(".board").click(function(){
//     var elid = $(this).attr('id');
//     $(elid).append('div');

// });
$(document).on("click", ".adder-list", function () {
    // var num = Number($(this).text().replace("+add list", ""));
    // if (num==NaN){
    //     var num = Number($(this).text().replace("list", ""));
    // };
    // $(".btn-area").append(html);
    var num = $('.list').length;
    var html = '<div class="list">list' + (num + 1) + '</div>';
    $('.adder-list').before(html);
});
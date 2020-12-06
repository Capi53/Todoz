// $(".board").click(function(){
//     var elid = $(this).attr('id');
//     $(elid).append('div');

// });
$(document).on("click", ".add-btn", function () {
    // var num = Number($(this).text().replace("+add list", ""));
    // if (num==NaN){
    //     var num = Number($(this).text().replace("list", ""));
    // };
    // $(".btn-area").append(html);
    var num = $('.add-btn').length;
    var html = '<button type="button" class="add-btn">list' + (num + 1) + '</button>';
    $('.adder_btn').before(html);
});
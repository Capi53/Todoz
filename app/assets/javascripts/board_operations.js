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
    var num = $('.list ').length;
    var html = '<div class="list" id=list_'+(num + 1)+'><p>list' + (num + 1) + '</p><button class="add-btn adder-card" id="cardadd_'+(num + 1)+'">add card</button></div>';
    $('.adder-list').before(html);
});

$(document).on("click", ".adder-card", function () {
    // var num = Number($(this).text().replace("+add list", ""));
    // if (num==NaN){
    //     var num = Number($(this).text().replace("list", ""));
    // };
    // $(".btn-area").append(html);
    var card_id_num = Number($(this).attr('id').replace("cardadd_", ""));
    console.log(card_id_num);
    // var a = card_id.text().replace("cardadd_", "");
    var num = $('.card').length;
    // var num = Number($(this).text().replace("card_id", ""));
    if (isNaN(num)){
        num = 0;
    };
    var html = '<div class="card" id="card_'+(num+1)+'" onclick="update_card(this.id)"><p>card' + (num + 1) + '</p></div>';
    $('#cardadd_'+card_id_num).before(html);
});

function update_card(card_id){
    var card_contents = document.getElementById(card_id);
    console.log(card_contents);
    card_contents.innerHTML = '<div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div><a href="#"><img src="<%= image_tag \'Todoz.png\' , :class => \'user_icon\'%>" alt="ポップアップ画像"></a>';
    return card_contents;
};
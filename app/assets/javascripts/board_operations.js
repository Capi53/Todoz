// $(".board").click(function(){
//     var elid = $(this).attr('id');
//     $(elid).append('div');

// });

var modalBtn = document.querySelector('.modal-btn');

// リスト作成関数
// $(document).on("click", ".adder-list", function () {
//     // var num = Number($(this).text().replace("+add list", ""));
//     // if (num==NaN){
//     //     var num = Number($(this).text().replace("list", ""));
//     // };
//     // $(".btn-area").append(html);
//     // var num = $('.list ').length;
//     // var html = '<div class="list" id=list_'+(num + 1)+'><p>list' + (num + 1) + '</p><button class="add-btn adder-card" id="cardadd_'+(num + 1)+'">add card</button></div>';
//     // var html = '<div class="list" id=list_'+(num + 1)+'><p>list' + (num + 1) + '</p><div id="board-modal"></div><%= link_to \'Add Card\', new_card_path, remote: true, class: "btn btn-lg, btn-primary add-btn adder-card" ,id: "cardadd_#{list_counter+1}"%>'
//     $('.adder-list').before(html);
// });

// カード作成関数
$(document).on("click", ".adder-card", function () {
    var card_id_num = Number($(this).attr('id').replace("cardadd_", ""));
    console.log(card_id_num);
    // var a = card_id.text().replace("cardadd_", "");
    var num = $('.card').length;
    // var num = Number($(this).text().replace("card_id", ""));
    if (isNaN(num)){
        num = 0;
    };
    // var html = '<div class="card" id="card_'+(num+1)+'" onclick="update_card(this.id)"><a href="#">card' + (num + 1) + '</a></div>';
    var html = '<div class="card" id="card_'+(num+1)+'" ><a href="#" class="card-name" id ="card-name-'+(num+1)+'">card' + (num + 1) + '</a><button class="modal-btn" id ="button-id-'+(num+1)+'" onclick="show_card_modal(\'card-name-'+(num+1)+'\')">Rename</button></div>';
    // var html = '<div class="card" id="card_'+(num+1)+'" ><a href="#" class="card-name" id ="card-name-'+(num+1)+'">a</a><input autofocus></input><button class="modal-btn" id ="button-id-'+(num+1)+'" onclick="show_card_modal(\'card-name-'+(num+1)+'\')">Rename</button></div>';    
    // var html = '<div class="card" id="card_'+(num+1)+'" ><a href="#" class="card-name" id ="card-name-'+(num+1)+' onclick="show_modal(card-name-'+(num+1)+')">card' + (num + 1) + '</a></div>';
    $('#cardadd_'+card_id_num).before(html);
});


// カード内容編集関数
function update_card(card_id){
    var card_contents = document.getElementById(card_id);
    console.log(card_contents);
    card_contents.innerHTML = '<div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div><a href="#"><img src="<%= image_tag \'Todoz.png\' , :class => \'user_icon\'%>" alt="ポップアップ画像"></a>';
    return card_contents;
};

// assets/javascripts/posts/modal.js
$(document).on('turbolinks:load', function() {
    // when a post is clicked, show its full content in a modal window
    $("body").on( "click", ".single-post-card, .single-post-list", function() {
        var posted_by = $(this).find('.post-content .posted-by').html();
        var post_heading = $(this).find('.post-content h3').html();
        var post_content = $(this).find('.post-content p').html();
        var interested = $(this).find('.post-content .interested').attr('href');
        $('.modal-header .posted-by').text(posted_by);
        $('.loaded-data h3').text(post_heading);
        $('.loaded-data p').text(post_content);
        $('.loaded-data .interested a').attr('href', interested);
        $('.myModal').modal('show');
    });
});

// var modalBtn = document.querySelector('.modal-btn');
// console.log(modalBtn);
// var modalBg = document.querySelector('.modal-bg');
// modalBtn.addEventListener('click', function(){
//     modalBg.calssList.add('bg-active');
// });

function show_card_modal(b_id){
    // var thisid = $(b_id).siblings('.card-name').attr('id');
    console.log(b_id);
    var cardname = $('#'+b_id).html();
    console.log(cardname);
    // $('.card-name-modal').text('宮城Gogo');
    $('.card-name-modal').html(cardname);
    $('.modal-bg').addClass('bg-active');
    $('.card-name-modal').attr('id', b_id);
};

// function show_modal(a_id){
//     var thisid = $(this).siblings('.card-name').attr('id');
//     console.log(thisid);
//     $('.modal-bg').addClass('bg-active');
//     $('.card-name-modal').attr('id', thisid);
// };

function close_card_modal(){
    $('.modal-bg').removeClass('bg-active');
    var change_id = $('.card-name-modal').attr('id');
    $('.card-name-modal').removeAttr('id', change_id);
    $('.card-name-modal').html();
};

function update_card_name(){
    var newname = $('#new_card_name').val();
    // var thisid = $(this).siblings('.card-name-modal').attr('id');
    // $('.card-name').text(newname);
    // $('.card-name-modal').text(newname);
    var change_id = $('.card-name-modal').attr('id');
    $("#"+change_id).text(newname);
    
    close_card_modal();
};

function show_board_modal(){
    $('.modal-bg').addClass('bg-active');
}

function close_modal(){
    $('.modal-bg').removeClass('bg-active');
}


//enter時に送信
$('#card_name or #list_name').keypress(function(e){
    if(e.which == 13){
        $(this).closest('form').submit();
    }
});

$('#card_name_form').click(function() {
    var list_id = $(this).attr('id').replace("cardadd_", "");
    $('#card_add_form').after('<%= form.hidden_field :list_id , value: '+list_id+', readonly: true %>');
});

function js_to_ruby(str1, str2, jsvar){
    jsvar = "'"+jsvar+"'";
    return "<% tmp="+jsvar+"%>";
};

$(document).on("click", ".adder-card", function(){
    console.log("あああ");
    var num = $(this).attr('id').replace("cardadd_", "");
    var id = "#board-modal-"+num;
    var id = "#board-modal";
    console.log(id);
    // $("'" +id+ "'").html("<%= escape_javascript(render 'form') %>");
    // $("'" +id+ "'").modal("show");
    // a('"'+id+'"');
});

// $(document).on("click", ".adder-list", function () {
//     var num = $('.list').length;
//     // js_to_ruby((num+1));
//     var a_contents = `<a class="btn btn-lg btn-primary add-btn adder-card" id="cardadd_${num+1}" data-remote="true" href="/cards/new?id=${num+1}">Add Card</a>`;
//     // console.log(a_contents);
//     var html = '<div class="list" id=list_' +(num + 1)+ '><p><%= escape_javascript(render \'form\') %></p><div id="board-modal-' + (num + 1) + '"></div>'+a_contents;
//     $('.adder-list').before(html);
// });

var words = ["Promoted", "プロモーション", "推荐", "프로모션"];

var block = function(){
  words.forEach(function(text){
    var elem = null;
    $("span:contains('" + text + "')").each(function(){
        if($(this).text() == text) elem = $(this);
    });
    if (elem != null){
      elem.parent().parent().parent().parent().parent().parent().parent().parent().parent().css("display", "none");
    }
  });
}

setInterval(block, 1000);

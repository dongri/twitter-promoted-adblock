var words = ["Promoted", "プロモーション"];

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

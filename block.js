
var word = "Promoted";

switch (document.documentElement.lang) {
  case "en":
    word = "Promoted";
    break;
  case "zh":
    word = "推荐";
    break;
  case "ja":
    word = "プロモーション";
    break;
  case "ko":
    word = "プロモーション";
    break;
  default:
    word = "프로모션";
}

var block = function(){
  var elem = null;
  $("span:contains('" + word + "')", "[data-testid='primaryColumn']").each(function(){
    if ($(this).text() === word) {
      elem = $(this);
    }
  });
  if (elem != null) {
    elem.parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
  }
  setTimeout(block, 1000);
}
block();


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
    word = "프로모션";
    break;
  default:
    word = "Promoted";
}

var block = function(){
  // $("span:contains('" + word + "')", "[data-testid='primaryColumn']").each(function(){
  $("span:contains('" + word + "')").each(function(){
    console.log($(this).text());
    if ($(this).text() === word) {
      $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
    }
  });
  setTimeout(block, 1000);
}
block();

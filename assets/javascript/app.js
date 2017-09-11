giphyKey = "bc8cb607d7f1414391f0c2f7c7432af8";

$(document).ready(function() {
  giphy = {};
  giphy["g"] = "https://media.giphy.com/media/l0Ex8HiCGD8BnsVvG/giphy.gif";
  giphy["i"] = "https://media.giphy.com/media/26gsjUq73y6M2VTSU/giphy.gif";
  giphy["p"] = "https://media.giphy.com/media/l0EwY7BdVn4C3ZajS/giphy.gif";
  giphy["h"] = "https://media.giphy.com/media/26gssxI5mUGopNIAg/giphy.gif";
  giphy["y"] = "https://media.giphy.com/media/l0ExaNkOKJ1UOW4ww/giphy.gif";
  var txtGiphy;
  giphyArray = "giphy".split("");
  for (var i = 0; i < giphyArray.length; i++) {
    var temp = $("<img>");
    temp.attr('src', giphy[giphyArray[i]]);
    temp.width(100);
    temp.height(100);
    $(".jumbotron").append(temp);
  }

  setInterval(function() {
    function clrNum(){return Math.floor(Math.random() * (230 - 1) + 1)}
    $(".jumbotron").animate({
      backgroundColor: "rgb(" + clrNum()+ "," + clrNum() + "," + clrNum() + ")",
    }, 3000);
  }, 3000);

});
buttonMngr = {
  // all code to manage buttons
  topicArray:["bjj","mma"]
}

imageMngr = {
  // all code to manage display of image

}

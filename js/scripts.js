function Tea(name, link) {
  this.name = name;
  this.link = link;
}

var teaBHE = new Tea("Organic Phu er", "https://www.amazon.com/");
var teaBHL = new Tea("Earl Grey", "https://www.amazon.com/");
var teaBLE = new Tea("English Breakfast", "https://www.amazon.com/");
var teaBLL = new Tea("Irish Breakfast", "https://www.amazon.com/");
var teaB0E = new Tea("Organic Asan", "https://www.amazon.com/");
var teaB0L = new Tea("Decaf Lipton", "https://www.amazon.com/");
var teaGHE = new Tea("Organic Matcha", "https://www.amazon.com/");
var teaGHL = new Tea("Organic Sencha", "https://www.amazon.com/");
var teaGLE = new Tea("Gunpowder Tea", "https://www.amazon.com/");
var teaGLL = new Tea("Jasmine Pearl", "https://www.amazon.com/");
var teaG0E = new Tea("Gyokuro", "https://www.amazon.com/");
var teaG0L = new Tea("Cucumber Mint", "https://www.amazon.com/");
var teaHHE = new Tea("Chamomile", "https://www.amazon.com/");
var teaHHL = new Tea("Peppermint", "https://www.amazon.com/");
var teaHLE = new Tea("Ginger", "https://www.amazon.com/");
var teaHLL = new Tea("Dragon fire", "https://www.amazon.com/");
var teaH0E = new Tea("Rose Hip", "https://www.amazon.com/");
var teaH0L = new Tea("Oolong", "https://www.amazon.com/");

var teaSelector = function(type, caffeine, tone, flavors) {
  if (type === "black" && caffeine === "high" && tone === "earthy"){
    name = teaBHE.name;
    link = teaBHE.link;
  } else if (type === "black" && caffeine === "high" && tone === "light"){
    name = teaBHL.name;
    link = teaBHL.link;
  } else if (type === "black" && caffeine === "low" && tone === "earthy"){
    name = teaBLE.name;
    link = teaBLE.link;
  } else if (type === "black" && caffeine === "low" && tone === "light"){
    name = teaBLL.name;
    link = teaBLL.link;
  } else if (type === "black" && caffeine === "no" && tone === "earthy"){
    name = teaB0E.name;
    link = teaB0E.link;
  } else if (type === "black" && caffeine === "no" && tone === "light"){
    name = teaB0L.name;
    link = teaB0L.link;
  } else if (type === "green" && caffeine === "high" && tone === "earthy"){
    name = teaGHE.name;
    link = teaGHE.link;
  } else if (type === "green" && caffeine === "high" && tone === "light"){
    name = teaGHL.name;
    link = teaGHL.link;
  } else if (type === "green" && caffeine === "low" && tone === "earthy"){
    name = teaGLE.name;
    link = teaGLE.link;
  } else if (type === "green" && caffeine === "low" && tone === "light"){
    name = teaGLL.name;
    link = teaGLL.link;
  } else if (type === "green" && caffeine === "no" && tone === "earthy"){
    name = teaG0E.name;
    link = teaG0E.link;
  } else if (type === "green" && caffeine === "no" && tone === "light"){
    name = teaG0L.name;
    link = teaG0L.link;
  } else if (type === "herbal" && caffeine === "high" && tone === "earthy"){
    name = teaHHE.name;
    link = teaHHE.link;
  } else if (type === "herbal" && caffeine === "high" && tone === "light"){
    name = teaHHL.name;
    link = teaHHL.link;
  } else if (type === "herbal" && caffeine === "low" && tone === "earthy"){
    name = teaHLE.name;
    link = teaHLE.link;
  } else if (type === "herbal" && caffeine === "low" && tone === "light"){
    name = teaHLL.name;
    link = teaHLL.link;
  } else if (type === "herbal" && caffeine === "no" && tone === "earthy"){
    name = teaH0E.name;
    link = teaH0E.link;
  } else if (type === "herbal" && caffeine === "no" && tone === "light"){
    name = teaH0L.name;
    link = teaH0L.link;
  }
};

$(document).ready(function(){
  $("form#teaSurvey").submit(function(event){
    event.preventDefault();
    var type = $("input:radio[name=type]:checked").val();
    var caffeine = $("input:radio[name=caffeine]:checked").val();
    var tone = $("input:radio[name=tone]:checked").val();
    var flavors = [];
    var flavor = "";

    teaSelector(type, caffeine, tone, flavors);
    
    $("#intro").hide();
    $("#answer").show();
    $("#answer").empty();
    if (tone === "earthy") {
      $('#answer').append("Because you asked for an " + tone + " " + type + " tea with " + caffeine + " caffeine and the following flavors:" + "<br>");
    } else if (tone === "light"){
      $('#answer').append("Because you asked for a " + tone + " " + type + " tea with " + caffeine + " caffeine and the following flavors:" + "<br>");
    }
    $("input:checkbox[name=flavor]:checked").each(function(){
      flavor = $(this).val();
      flavors.push(flavor);
      $('#answer').append("* " + flavor + "<br>");
    });
    $("#answer").append("<h1>You should try our " + name + "!</h1>");
    $("#answer").append("<a href=\"" + link + "\">click here to buy!</a>");
  });
});

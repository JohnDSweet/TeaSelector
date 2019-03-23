$(document).ready(function(){
  $("form#teaSurvey").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    var teaArray = [];
    $("input:checkbox[name=type]:checked").each(function(){
      var selection = $(this).val();
      teaArray.push(selection);
      $('#result').append(selection + "<br>");
    });
    $("#resultTag").show();
    $("#result").show();
    console.log(teaArray);
  });
});

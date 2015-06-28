
var civicTemplate 

$(document).on("ready", function(){

  civicTemplate = Handlebars.compile($("#civic-template").html())

  $(".civic").append(civicTemplate(inventoryList.sortcivic()))

})
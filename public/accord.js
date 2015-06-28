
var accordTemplate 

$(document).on("ready", function(){

	accordTemplate = Handlebars.compile($("#accord-template").html())

	$(".accord").append(accordTemplate(inventoryList.sortaccord()))

})
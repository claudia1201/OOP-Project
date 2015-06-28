
var suvTemplate 

$(document).on("ready", function(){

	suvTemplate = Handlebars.compile($("#suv-template").html())

	$(".suv").append(suvTemplate(inventoryList.sortsuv()))

})
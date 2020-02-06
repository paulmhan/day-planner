//create html variables here
let saveButton = $("#save")


$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


saveButton.on("click", saveAgenda);
var person = $(this).attr("data-person");


function saveAgenda(){

}
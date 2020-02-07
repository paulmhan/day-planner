$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//create html variables here

let schedule = $(".schedule");
let agenda;


//function that prompts user to put in schedule for the hour




$(".save").on("click", function(e){
    e.preventDefault();
    console.log($(this).siblings('.schedule'));
    localStorage.setItem(hour, agenda);
   
})

function getAllHours(){
    $("#text1").val(localStorage.getItem("hour1"));
    localStorage.getItem("hour2")
    localStorage.getItem("hour1")
    localStorage.getItem("hour1")
    localStorage.getItem("hour1")
}
//function that saves ones agenda to the local storage so it stays even upon refreshing the page
// saveButton.on("click", saveAgenda);


// let hour = 1;
// function saveAgenda(){
//     let hour =1;
//     
//     schedule.text(`${localStorage.getItem(agenda)}`)

// }

let hour = $(".hour")
//function that changes color of schedule text box based on what hour it is
function checkTime(){
   hour.each(function(){
       console.log($(this).children().attr("id"));
   })
}

checkTime();

//todo list:
// 1) make the agenda boxes text boxes
// 2) create save function that gets the agenda box and saves to local storage
// 3) create function that colors the agenda boxes red for current hour, green for future hours, or current grey for past
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
    //    let currentTime = moment().format('HH');
       let currentTime = 12
       let plannerTime = $(this).children().attr("id")
       console.log(currentTime);
       console.log(plannerTime);

    //    console.log($(this).children().attr("id"));
    //    console.log(moment().format('HH'))
       if(currentTime < plannerTime){
        schedule.css("background-color", "#77dd77");
       }
       else if(currentTime === plannerTime){
        schedule.css("background-color", "#ff6961");
       }

       else{
        schedule.css("background-color", "grey");
       }
   })
}

checkTime();


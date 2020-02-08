$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//create html variables here
let schedule = $(".schedule");

//function that gets user input and saves to local storage

// specific function to grab schedule section after clicking save button
// having trouble get the button to reference sibling tag
$(".save").on("click", function(e){
    e.preventDefault();
    let agenda = $(this).parent().siblings('.schedule').find("input").val();
    let hour = parseInt($(this).attr("id"));
    localStorage.setItem(hour, agenda); 
});



//function to get all saved items from local storage and display it on the schedule section
// function getAllHours(){
//     $("#text1").val(localStorage.getItem("hour1"));
//     localStorage.getItem("hour2")
//     localStorage.getItem("hour1")
//     localStorage.getItem("hour1")
//     localStorage.getItem("hour1")
// }





// function that changes color of schedule text box based on what hour it is


let hour = $(".hour")

function checkTime(){
   hour.each(function(){
       let currentInput = $(this).children().attr("id")
    //    let currentTime = moment().format('HH');
       let currentTime = 12
       let plannerTime = parseInt($(this).children().attr("id"))
    //    console.log(currentTime);
    //    console.log(plannerTime);
    //    debugger;
       if(currentTime < plannerTime){
        schedule.css("background-color", "#77dd77");
        $(`input #${currentInput}`).css("background-color", "#77dd77" )
       }
       else if(currentTime === plannerTime){
        schedule.css("background-color", "#ff6961");
        $(`input #${currentInput}`).css("background-color", "#ff6961")
       }

       else{
        schedule.css("background-color", "grey");
        $(`input #${currentInput}`).css("background-color", "grey" )
       }
   });

}

checkTime();


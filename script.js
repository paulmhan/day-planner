$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//create html variables here
let schedule = $(".schedule");


// specific function to grab schedule section after clicking save button
$(".save").on("click", function(e){
    e.preventDefault();
    let agenda = $(this).parent().siblings('.schedule').find("input").val();
    // let agenda2 = $(this).parent().siblings('.schedule').find("input")
    hour = parseInt($(this).attr("id"));
    localStorage.setItem(hour, agenda); 
    console.log(localStorage.getItem(hour))

});

$("#hour1").val(localStorage.getItem("9"))
$("#hour2").val(localStorage.getItem("10"))
$("#hour3").val(localStorage.getItem("11"))
$("#hour4").val(localStorage.getItem("12"))
$("#hour5").val(localStorage.getItem("1"))
$("#hour6").val(localStorage.getItem("2"))
$("#hour7").val(localStorage.getItem("3"))
$("#hour8").val(localStorage.getItem("4"))
$("#hour9").val(localStorage.getItem("5"))




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
       debugger;
       if(currentTime < plannerTime){
        console.log(currentTime, plannerTime);
        schedule.css("background-color", "#77dd77");
        $(`#${plannerTime}`).css("background-color", "#77dd77" )
       }
       else if(currentTime === plannerTime){
        schedule.css("background-color", "#ff6961");
        $(`#${plannerTime}`).css("background-color", "#ff6961")
       }

       else{
        schedule.css("background-color", "grey");
        $(`#${plannerTime}`).css("background-color", "grey" )
       }
   });

}

checkTime();
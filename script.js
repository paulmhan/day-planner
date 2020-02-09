$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//create html variables here
let schedule = $(".schedule");


// specific function to grab schedule section after clicking save button
$(".save").on("click", function(e){
    e.preventDefault();
    let agenda = $(this).parent().siblings('.schedule').find("input").val();
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
       let currentTime = moment().format('HH');     
       let plannerTime = parseInt($(this).children().attr("id"));

       if(currentTime < plannerTime){        
        $(`#${plannerTime}`).css("background-color", "#77dd77" );
       }
       else if(currentTime === plannerTime){ 
        $(`#${plannerTime}`).css("background-color", "#ff6961");
       }
       else{
        $(`#${plannerTime}`).css("background-color", "grey" );
       }
   });

}

checkTime();
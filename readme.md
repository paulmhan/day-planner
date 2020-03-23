# Day Planner   
## HW Assignment 4

# Layout 

Using the table element, I was able to quickly construct rows representing hours, and columns representing the time, agenda, and save function. It is easy to interpret and use. There is a jumbotron that tells the user the date and the function of the day planner. 

![Alt text](assets/images/day-planner.png?raw=true)


# Saving the Agenda

Once a user types in his/her agenda, she has the option to save that agenda into that specific hour. It is saved into the local storage, therefore it will not disappear when refreshing the page. 


# Color Changing 

The background colors of the hours column change colors based on the time. I used moment.js to get the real time in military format, and compared that to the time in the schedule. Then, based on the real time, if the calendar time has already been passed, it will be colored grey, if it has yet to pass, it will be colored green, and if the times are equal, it will be colored red. 

# What I Learned

I learned that using bootstrap is not always the easiest. I had a hard time styling and creating functions to do what I wanted it to do over the bootstrap. At a certain point, I thought starting over from scratch, using divs, might have been easier. Although there was not that many lines of code, this assignment took me a long time because I spent so long on debugging one or two lines of code. 
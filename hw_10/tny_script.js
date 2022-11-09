"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {

   /* Display the current date and time*/
   document.getElementById("dateNow").innerHTML =
   "m/d/y<br />h:m:s"; 

   /* Display the time left until New Year's Eve*/
   document.getElementById("days").textContent = "dd";
   document.getElementById("hrs").textContent = "hh";
   document.getElementById("mins").textContent = "mm";
   document.getElementById("secs").textContent = "ss";

   /* Store the current date and time*/
   var currentDay = new Date("November 08, 2022 21:43:35");
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time*/
   document.getElementById("dateNow").innerHTML = 
   dateStr + "<br />" + timeStr;

   /* Calculate the days until January 1st */
   var newYear = new Date("January 1, 2023");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);

   /* Calculate the hours left in the current day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   /* Display the time left until New Year's Eve */
   document.getElementById("days").textContent = daysLeft;
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);

   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   document.getElementById("mins").textContent = 
   Math.floor(minsLeft);
   document.getElementById("secs").textContent =
   Math.floor(secsleft);
}
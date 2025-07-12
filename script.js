
let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

setInterval(() => {
    currentTime = new Date();
    hrs.innerHTML =(currentTime.getHours() < 10 ? "0" : "")  + currentTime.getHours();

    mins.innerHTML =
(currentTime.getMinutes() < 10? "0" : "")  +  currentTime.getMinutes(); 
    secs.innerHTML = 
(currentTime.getSeconds() < 10? "0" : "")  +  currentTime.getSeconds();
}, 1000);


  

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
 
 btn.addEventListener('click', () => {
    btn.classList.toggle('open')
 })
 
 
 
 // CountDown

 var countDownDate = new Date("Aug 20, 2022 00:00:01").getTime();

 var x = setInterval(function () {

     var now = new Date().getTime();
     var distance = countDownDate - now;

     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById("time").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";

     if (distance < 0) {
         clearInterval(x);
         document.getElementById("time").innerHTML = "Started";
     }
 }, 1000);


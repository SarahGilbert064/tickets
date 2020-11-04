function Ticket (age, time, movieTitle) {
  this.age = age;
  this.time = time;
  this.movieTitle = movieTitle;
}


Ticket.prototype.totalPrice = function() {
  return this.movieTitle + this.time + this.age;
}



$(document).ready(function() {
  ("form#movieTitle").submit(function(event) { 
event.preventDefault();

const age = parseInt(ageStr);
const time = parseInt(timeStr);
const movie = parseInt(movieStr);

const timeStr = $("select#time").val();
const ageStr = parseInt($("select#age").val());
const movieStr = $("select#movie").val();

let newVar = new Ticket (ageStr, timeStr, movieStr);
let calPrice = newVar.totalPrice();


$("#output-price").text(calPrice);
  });
});












// function ageTicket(age) {
//   if (age <= 12) {
//     return "kid"
//   }
//   else if (age >= 65) {   
//     return "senior"
//   }
//   else {
//     return "adult"
//   };
// };
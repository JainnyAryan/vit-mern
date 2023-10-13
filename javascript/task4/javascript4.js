function showDate() {

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  let currentDay = String(date.getDate());
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
  document.getElementById("date").innerHTML = currentDate;

}
function showTime() {

  var date = Date(Date.now());
  let currentDate = date.toString();
  document.getElementById("time").innerHTML = currentDate;
  
}

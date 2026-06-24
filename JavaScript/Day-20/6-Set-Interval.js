//---------Set Interval Func--------------
/**setInterval() is used to run a function again and again after a fixed time gap.
1-Unlike setTimeout (runs once),
2-setInterval runs repeatedly. **/

//-Syntax
//setInterval(function, timeInMilliseconds);

//-Example
let intervalId = setInterval(() => {
  console.log("Hello");
}, 2000);

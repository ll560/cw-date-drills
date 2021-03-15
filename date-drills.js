// 1)  Create an example of using Date ()
let today = Date();    
console.log(today);

// 2) How would you get just today's date using getDate()? Write the code you would need to get the result. How would it show on the console?


let d = new Date();
let n = d.getDate();
console.log(n);

// 3) What method would you use to change the day from the current date (like March 13, 2021) to something like the 21st? Write the code below you would need to get the result. How would it display on the console?
let d = new Date();
d.setDate(21);
console.log(d);

// 4) How would you convert a date to a readable string using? Write the code to show today's date as a string and comment what it would look like.
let today = new Date();
let t = today.toDateString();
console.log(t);

//5) What does Date.now() do and how would you write it to show in the console? Comment what the result would be.
let c = Date.now();
console.log(c);

// Bonus Challenges!

// 6) Write an example of toLocaleDateString()
let e = new Date();
let f = e.toLocaleDateString();
console.log(); 

// 7) Write the method to get the current full year.

// 8) Write the method to get the current day of the week.

// 9) Write  out a code using  setMonth method. Give it a value of either 1-12 inside the paranthesis. What was the result?

/* 10) Using the guide from https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/ create a function that you can customize your date format. */




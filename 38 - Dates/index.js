
const date = new Date();

date.setFullYear(1918);
date.setMonth(10);
date.setDate(11);

console.log(date)

// Date(year, month, day, hour, minute, second, ms)
const date2 = new Date(1870, 11, 29, 11, 11, 0);
console.log(date2)

const date3 = new Date("2022-01-04T12:00:12Z");
console.log(date3)

// show only year
const year = date.getFullYear();
// show only month it start with 0 and not 1
const month = date.getMonth() + 1;

const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();

const dayOfWeek = date.getDay();



console.log(year);
console.log(month);
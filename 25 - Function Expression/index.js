// declare 

function Hello() {
    console.log("Hello");
}

setTimeout(Hello, 3000);

// expression
setTimeout(function() {
    console.log("hello");
}, 6000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
})

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}
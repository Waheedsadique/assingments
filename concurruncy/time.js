function func(params) {
    console.log("hello");
}

function func2(params) {
    console.log("hello back");
}

// setInterval(func,3000)


// setTimeout(func, 3000);

setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value)
}
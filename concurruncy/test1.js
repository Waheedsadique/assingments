async function myFun() {
    return "Hello";
    
    }
    myFun().then(
    function(val) { console.log(val); },
    function(err) { conole.log(err); }
    );
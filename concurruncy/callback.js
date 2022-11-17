function greet(fullName){
    console.log(`Welcome, ${fullName[0]} ${fullName[1]}`)
    setTimeout((processCall) => {
       
    }, 5000);
}

  function processCall(user, callback){
            const fullName = user.split(" ");
            callback(fullName);
        }
        processCall("Laurence Svekis", greet);
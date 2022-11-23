const guest = ["Waheed", "mubeen", "sohail", "munir"];

removeGuest = guest.pop();
const msg = " is not attending dinner";
guest.push("waqas");
console.log(removeGuest + msg);




let txt = "";

guest.forEach(myFunction);
console.log(txt);


function myFunction(value) {

	txt += value + " I would like you invite to dinner \n";
};
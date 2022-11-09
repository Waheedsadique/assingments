const guest = ["Waheed", "Munir", "Sohail", "mubeen"];

let txt = "";

guest.forEach(myFunction);
console.log(txt);


function myFunction(value) {

	txt += value + " I would like you invite to dinner \n";
};
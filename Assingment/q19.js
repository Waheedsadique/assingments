// inviting guest for dinner
const guest = ["Waheed", "Soahil", "Munir", "Ali"];

let txt = "";

guest.forEach(myFunction);
console.log(txt);
console.log(guest);
console.log(guest.length); 


function myFunction(value) {

	txt += value + " I would like you invite to dinner \n";
};
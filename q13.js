const favCar = ["Honda", "Suzuki", "cultus", "BMW"];

let txt = "";

favCar.forEach(myFunction);
console.log(txt);


function myFunction(value) {

	txt += "I would like to own " + value + " car\n";
};


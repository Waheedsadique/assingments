

const multiplication = [];

const value =8;

for (let i = 0; i < value; i++) {
   const temprary = [];
for (let j = 0; j < value; j++)
{

    temprary.push(i*j);

}

multiplication.push(temprary);


}

console.table(multiplication);






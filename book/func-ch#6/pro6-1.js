

const recu = function counter(i) {
console.log(i);
if (i < 11) {
    return counter(i + 1);
}
return;
}
recu(0);
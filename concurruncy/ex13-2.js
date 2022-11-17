

const pro = new Promise((resolve, reject) => {
    resolve('strat counting');
})
    .then(v => {
        console.log(v);
        return 'one';
    }).then(v => {
        console.log(v);
        return 'two';
    }).then(v => {
        console.log(v);
        return ('three');
    }).then(v => {
        console.log(v);

    }).catch()
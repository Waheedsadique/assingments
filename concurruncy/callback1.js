function makeanda(cb) {
    setTimeout(() => {
       cb('makeanda');
    }, 1000);
}

function toastbread(cb) {
setTimeout(() => {
    cb('toast ok');
}, 2500);
    
}

function maketea(call){
    setTimeout(() => {
        call('maketea')
    }, 1000);
}

function makeroti(call) {
    call("make roti")
    
}

makeanda(function (params) {
    console.log(params);
    toastbread (function (params1) {
        console.log(params1);
        maketea (function (params2) {
        console.log(params2); 
      makeroti(function (params3) {
        console.log(params3);
        console.log('end');
      })
        })

    })
});



// const promise = new Promise ((resolve,reject)=>{
//     let marks = 60;
//     if (marks >= 70){
//     resolve();
// }else {
// reject();
// }
// });
// promise.then(()=> {
//     console.log('done sir');
// }).catch(()=>{
//     console.log('sorry sir');
// })


const func = (marks)=>{
return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        if (marks >= 70){
            resolve('passed');
        }else {
        reject('sorry');
        }
        })
        
    }, 5000);
        
}

const make = (mood)=>{ 
    return new Promise ((resolve, reject ) =>{
    if (mood >= 10) {
        resolve ('maketea')
    }else {
        reject ('not make tea')
    }
})
}

func(80).then((ali)=>{
    console.log(ali);
    return make();
    
})
.then(()=>{
    console.log();
})
.catch((r)=>{
    console.log(r);
})
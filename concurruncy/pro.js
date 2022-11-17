function makepartha() {
    return new Promise((res , rej)=>{
        setTimeout(() => {
            let wifimood = 3;
            if (wifimood >=3){
                res ('starting make paratha');
            }else{
                rej ('don\'t starting  make paratha');
            }

        }, 3000);
    }) 
};
function maketea() {
    return new Promise((res , rej)=>{
        setTimeout(() => {
            let wifimood = 3;
            if (wifimood >=3){
                res ('starting make tea');
            }else{
                rej ('don\'t starting make tea');
            }

        }, 2000);
    }) 
};

function washingdishes() {
    return new Promise((res , rej)=>{
        setTimeout(() => {
            let wifimood = 2;
            if (wifimood >=3){
                res ('starting washing dishes');
            }else{
                rej ('don\'t starting washing dishes');
            }

        }, 2000);
    }) 
};
 makepartha().then((w)=>{
console.log(w);
return maketea();


 }).then((w)=>{
    console.log(w);
    return washingdishes();
 
    
     }).then((n)=>{
        console.log(n);
     })
     .catch((err)=>{
        console.log(err);
     })
    
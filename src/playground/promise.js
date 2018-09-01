const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        //resolve("the promise is resolved");     //promises can be resolved or rejected only once
        reject(" promise rejected");
    }, 1500);

});

console.log("before");
promise.then((data)=>{ //this only fires if the promise get resolved
console.log(data);
}).catch((error)=>{
    console.log(error);
});
console.log("after");
let a=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        10>5 ? resolve(console.log("successful")) : reject(console.log("failure"))
    },[5000])
  }) 

}

let b=()=>{
    console.log("method 2")
}
a().then(()=>{b()}).catch(()=>{console.log("err")});
//b();

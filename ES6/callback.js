//callback:while invoking a function passing the function as an arguement

/*let a=(a,b,c)=>{return c(a,b)}
let r=a(10,20,(a,b)=>{return a+b})
let r1=a(10,20,(a,b)=>{return a*b})
let r2=a(10,20,(a,b)=>{return a-b})
console.log(r2)*/

var x=(p,q,r)=>{return r(p,q)}

let ab=x(10,30,(p,q)=>{return p*q})
console.log(ab)


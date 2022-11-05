//task to perform capitalise the first letter
function a(name){
let separate=name.slice(0,1)
 let capitalize=separate.toUpperCase()
 return capitalize+name.slice(1)
}
console.log(a("bombay"))


/*function b(abc){
let separate=abc.slice(0,1)
let capitalise=separate.toUpperCase()
return capitalise+abc.slice(1)
}
console.log(b("mandya"))*/

function c(xyz){
    let separate=xyz.slice(0,1)
    let capitalise=separate.toUpperCase()
    return capitalise+xyz.slice(1)
}
console.log(c("chirag"))

//by using substring method
function x(cap){
let b=cap.slice(0,1)
let c=b.toUpperCase()+cap.substring(1)
return c
}
console.log(x("darshan"))

//using slice method
function y(bad){
let c=bad.slice(0,1)
d=c.toUpperCase()+bad.slice(1)
return d
}
console.log(y("akash"))
//to capitalise 1st word in a sentence
 var a="pro stack academy in marathalli"
 //convert string to array
let b= a.split(" ")
v=[]
//console.log(b)
for( data of b){
    let c=data.substr(0,1)
   // console.log(c)
   let d=c.toUpperCase()
   console.log(d)
   v.push(d+data.slice(1))
}
console.log(v)
console.log(v.toString())
console.log(v.join(" " ))
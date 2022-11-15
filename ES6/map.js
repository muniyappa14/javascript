//map method
let names=["rahul","muni","chiru"]
names.map((name)=>{
                   console.log(name)

                 })
//advantages
//1.it is easy to copy
//2.easy to create duplicate array
let a=["muni","darshu","chiragraj"]
let b=a.map((elements)=>{
    console.log(elements)
    return elements
})
console.log(a)
console.log(b)


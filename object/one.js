//object.assign():to assign every properties as it is
var a={id:101,name:"muni",salary:20000}
//console.log(Object.assign(a))


//object.entries():assigning the values in array format
console.log(Object.entries(a))


//object.is():used to compare two values is it same
console.log(Object.is(a.id,a.name))


//object.seal():it does notv allows new entries to the object.but it allows modification inside object
//console.log(Object.seal(a))


//object.freeze():it does not allows any changes
console.log(Object.freeze(a))
a.id="102"
console.log(a)

//object.isfrozen:to check the object is freezed or not
console.log(Object.isFrozen(a))

//object.isextensible:this is used to check the object is extensible or not
console.log(Object.isExtensible(a))


//object.preventextension():it is uesd to prevent extension(to stop)
console.log(Object.preventExtensions(a))

//Object.assign():to copy the properties one to another object
let b={}

b=Object.assign(a)
console.log(b)


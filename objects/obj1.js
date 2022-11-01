//empty object
//for deleting
//renaming and updating
//taking only keys 
//taking only key values
//taking both keys and values
a={}
a.name="muniyappa"
console.log(a)
a.number=9741456914
console.log(a)
delete a.number
console.log(a)
a.location="marathalli"
console.log(Object.keys(a))
console.log(Object.values(a))
console.log(Object.entries(a))
 //to show the duplicate values
 let number=[1,2,3,4,5,6,7,1,2]
 function duplicate(number){
   return number.filter((item,index)=>number.indexOf(item)!==index)
 }
console.log(duplicate(number))

 /*let number=[1,2,3,4,5,6,7,1,2]
 function duplicate(number){
   return [...new set(number)]
 }
console.log(duplicate(number))*/


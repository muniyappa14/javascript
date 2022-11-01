//every:to check each and every elements in an array
var age=[20,21,22,23,1]
function check(age)
{
    return age>0 //condition
}
console.log(age.every(check))

//fill:it relpaces the value of an array within the given index,starting and ending,
//index are neccessary 
var a=[1,22,23,24,50]
console.log(a.fill(30,2,3))



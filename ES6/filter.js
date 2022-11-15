//it is used to filter the array elements
let a=[1,2,3,4,5,6]
for (i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(a[i])
    }
}

let b=[1,2,3,4,5,6,7,8]
 let c=b.filter((element)=>{
return element%2==0
})
console.log(c)
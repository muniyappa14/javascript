//to find the duplicate elements
let a=[10,20,30,40,50,10,20]
let b=new Set(a)
 let c=a.filter((ele)=>{
    if(b.has(ele)){
        b.delete(ele)
    }else{
        return ele
    }
 })
 console.log(c)
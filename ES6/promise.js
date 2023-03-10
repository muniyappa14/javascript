  //promise method:

  let employee=[{id:101,name:"muni",salary:25000},
{id:102,name:"chirag",salary:35000}]

 let getemployee=(muni)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        flag=true

        employee.push(muni)
        flag?resolve("data inserted successfully"):reject("data rejected")
    },[4000])
})

}

 let getdetails=()=>{
    setTimeout(()=>{
        rows=""
        for(emp of employee){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            </tr>`
        }
        document.getElementById("xyz").innerHTML=rows
    },[1000])

}
getemployee({id:104,name:"benz",salary:35000}).then((msg)=>{
    console.log(msg)
    getdetails()


})
.catch((err)=>{
    console.log(err)
})








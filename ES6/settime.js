let employee=[{id:101,name:"muni",salary:25000},
{id:102,name:"chirag",salary:35000}]

 function  emp(ab){setTimeout((ab)=>{
    employee.push(ab)},
    [2000])

 }
 function getdetails(){
  
    setTimeout(()=>{
        rows=""
        for( ab of employee ){
        rows=rows+`<tr>
        <td>${ab.id}</td>
        <td>${ab.name}</td>
        <td>${ab.salary}</td>
        </tr>`}
        document.getElementById("abc").innerHTML=rows},[1000])
 }
 emp({id:103,name:"darshu",salary:45000})
 getdetails()
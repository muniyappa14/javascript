var employees=[{"id":1,"name":"Granger","email":"gdoel0@timesonline.co.uk"},
{"id":2,"name":"Dianemarie","email":"dbeck1@twitpic.com"},
{"id":3,"name":"Daron","email":"ddrewclifton2@uiuc.edu"},
{"id":4,"name":"Babbie","email":"bogus3@nasa.gov"},
{"id":5,"name":"Dulsea","email":"dtellenbrook4@tinyurl.com"},
{"id":6,"name":"Roseline","email":"rkittle5@tripadvisor.com"},
{"id":7,"name":"Maritsa","email":"mcockill6@sohu.com"},
{"id":8,"name":"Obed","email":"overna7@technorati.com"},
{"id":9,"name":"Torrin","email":"tstork8@list-manage.com"},
{"id":10,"name":"Alexi","email":"avigne9@berkeley.edu"},
{"id":11,"name":"Sherm","email":"saglionea@amazon.com"},
{"id":12,"name":"Alvis","email":"adionisob@t.co"},
{"id":13,"name":"Kristan","email":"kellitc@spotify.com"},
{"id":14,"name":"Genni","email":"glambertod@ca.gov"},
{"id":15,"name":"Sharyl","email":"sschuelckee@jalbum.net"},
{"id":16,"name":"Jacki","email":"jfairbrotherf@dedecms.com"},
{"id":17,"name":"Kienan","email":"kbuttelg@webeden.co.uk"},
{"id":18,"name":"Fergus","email":"ffidalh@google.com.au"},
{"id":19,"name":"Tallia","email":"tfancei@sakura.ne.jp"},
{"id":20,"name":"Sheridan","email":"svogtj@shop-pro.jp"}]
//call a function with function name let enter empty row=""
function display_data(){
    let rows=" "
   //use for of method inside the function=  for(of) 
    for(employee of employees){
  
    //`` =using backtic to perform html data in javascript
rows=rows+`<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.salary}</td>
            <td>${employee.email}</td>
          <td>${employee.email.substr(employee.email.indexOf('@')+1).toUpperCase()}</td>
            </tr>`
    }
    //get the id from html (tbody) by (document.getelementbyid("imp")
    //.innerhtml is used to write the text
    document.getElementById("imp").innerHTML=rows
}
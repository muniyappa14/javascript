function view(num){
    document.getElementById("result").value+=num
}
function compute(){
    var x=document.getElementById("result").value
    var y=(x);
    document.getElementById("result").value=y;  
}
function clr(){
    document.getElementById("result").value="";
}
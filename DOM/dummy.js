function form_validate(){
    let name=document.getElementById('sname').value

    if(name==""){
        document.getElementById('alertmg').innerHTML="please enter username"
    }
    return false
}
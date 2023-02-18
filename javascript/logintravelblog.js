
function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","../asset/logos/openeye.png")
}
function notvis()
{
    document.getElementById("b").setAttribute("src", "../asset/logos/closeeye.png")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var pasword="123"
    var email="banu@123"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("Emai").value
    if (useremail==email && userpass==pasword) {
        document.getElementById("good").setAttribute("acton","./ind.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=""
    }
    else if(useremail!=email && userpass==pasword){
        document.getElementById("Emai").style.borderColor="red"
        document.getElementById("result").innerHTML="Invalid email"
    }
    else if(useremail==email && userpass!=pasword){
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Invalid password"
    }
    else{
        document.getElementById("Emai").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Invalid Email and Password"
    }
}

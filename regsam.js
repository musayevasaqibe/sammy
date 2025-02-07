var ad=document.querySelector(".firstname")
var kod=document.querySelector(".pass")
document.querySelector(".enter").addEventListener("click",function () {
    if (ad.value=="sagiba" && kod.value=="1234") {
        // alert("duzdur")
    } else {
        // alert("sehvdir")
    }
    
})
document.querySelector(".umumidiv i").addEventListener("click" , function () {
    document.querySelector(".umumidiv i").classList.toggle("fa-eye")
    if(kod.getAttribute("type") == "password"){
        kod.setAttribute("type","text");
    }
    else{
    kod.setAttribute("type", "password")
    }
    
})
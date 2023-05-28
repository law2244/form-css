let input = document.querySelector(".input_senha_js")



function evento(){
    if(input.getAttribute("type") === "password"){
        input.setAttribute("type" , "text")
    } else{
        input.setAttribute("type" , "password")
    }
}
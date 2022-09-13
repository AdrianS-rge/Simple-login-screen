document.getElementById("sub-btt").addEventListener("click", function(event){
    let user = document.getElementById("username").value
    let password = document.getElementById("password").value 
   
    if(user == "" || password == "") {
        alert("Username or password is empty")
    }

    if(user && password) {

    alert(`Welcome ${user}`)


    }

    event.preventDefault()
})

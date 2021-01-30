function myfunction(event){

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var email = document.getElementById("email").value
    var object={username, password, email}
    console.log(object)
    //var myarray = [];
    //myarray.push(object)
    //console.log(myarray)
    //    localStorage.setItem("registerData", JSON.stringify(object));
    //var getData = localStorage.getItem("registerData");
    //console.log(gerData)
}

function subFunction(event){
    
    var subEmail = document.getElementById(subEmail).value
    console.log(subEmail);
}

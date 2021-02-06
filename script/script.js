function myfunction(event){

    event.preventDefault()

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var city = document.getElementById("city").value
    var tel = document.getElementById("phonenumber").value
    var gender ;
    var dob = document.getElementById("dob").value
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value
    }
    if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value
    }
    if (document.getElementById('other').checked) {
        gender = document.getElementById('other').value
        
    }
    
    var object = {username, password, firstname, lastname, email, city, tel, gender, dob}
    console.log(object)
    var myarray = [];
    myarray.push(object)
    console.log(myarray)
        localStorage.setItem("registerData", JSON.stringify(object));
    var getData = localStorage.getItem("registerData");
    console.log(getData)
        document.getElementById("showData").innerHTML = getData;
}

function genderchecker(gender) {
    var male;
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value
    }
        else if(document.getElementById('female').checked) {
            gender = document.getElementById('female').value
        }
            else{
                gender = document.getElementById('other').value
            }
}
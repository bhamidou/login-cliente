var email = "";
var password = "";

var usu = "admin";
var pass = "1234";

function checkUser() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (checkValues(email, password)) {
      if (email == usu && password == pass) {
          //confirm('contraseña correcta')
          window.location.replace("./test.html");
        } else {
            //alert('contraseña incorrecta')
            document.getElementById("test").innerHTML =
            "<h3>Contraseña incorrecta vulve a intenterlo</h3>";
        }
    }else {
        document.getElementById("test").innerHTML =
        "<h3>Campos vacíos</h3>";
    }
}


function checkValues(email, password){
    var continuar = true

    if(empty(email) || empty(password)){
        continuar = false
    }

    return continuar
}

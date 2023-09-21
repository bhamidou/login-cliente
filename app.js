var email = "";
var password = "";

var usu = "admin@test.com";
var pass = "1234";
var arr = "#$()|ºª~-_<+*¿?!%/&={}+`´^;\":,";
var arrChars = arr.split("");




function checkUser() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  
  if (checkSpecialStrings(email, arrChars)) {
    if (checkEmptyValues(email, password)) {
      if (checkMail(email)) {
        if (email == usu && password == pass) {
          window.location.href = "./profile.html";
        } else {
          sendNotification(
            "notificacion",
            "Usuario o contraseña incorrectos vuelve a intenterlo"
          );
        }
      } else {
        sendNotification("notificacion", "Debe de introducir un correo válido");
      }
    } else {
      sendNotification("notificacion", "Campos vacios");
    }
  } else {
    sendNotification("notificacion", "Ha introducido caracteres no válidos en el correo");
  }
}







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkMail(email) {
  check = false;

  let arrLetrs = email.split("");

    let count = countChars(email, "@");

  if (count <= 1) {

    let domain = email.slice(countLongBy(email, "@") + 1, email.length);

    //comprobamos que haya más de un "." en el dominio 
    var countDots = countChars(domain, ".")
    if (countDots >= 1) {
      check = true;
    }

  }

  return check;
}

//devuelve cuantos caracteres hay desde str hasta que encuentra el primer match con el char buscado

function countLongBy(str, searchChar) {
  let num = 0;
  let arrStr = str.split("");

  while (arrStr[num] != searchChar) {
    num++;
  }

  return num;
}

//devuelve el número de veces que aparece searchChar en str
function countChars(str, searchChar){
  let count = 0
  let i = 0
 
  while (str.length>i){
    if(str[i]==searchChar) count++
    i++
  }

  return count
}

function checkEmptyValues(email, password) {
  var continuar = false;

  if (email.length > 1 || password.length > 1) {
    continuar = true;
  }
  return continuar;
}

function sendNotification(id, message) {
  return (document.getElementById(id).innerHTML = `<h4> ${message}</h4>`);
}

function checkSpecialStrings(str, pattern) {
  var check = true;

  var i = 0;
  var j = 0;

  let arrStr = str.split("");
  //console.log(arrStr)

  while (arrStr.length > i) {
    while (pattern.length > j) {
      
      if (arrStr[i] == pattern[j]) {
        check = false;
        break;
      }
      j++;
    }
    j = 0;
    i++;
  }
  return check;
}

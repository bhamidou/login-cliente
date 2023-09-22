class User {
  constructor(dni, name, last1, last2, email, pass, born) {
    this.dni = dni;
    this.name = name;
    this.last1 = last1;
    this.last2 = last2;
    this.email = email;
    this.pass = pass;
    this.born = born;
  }
}

function clearInput() {
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("last1").value = "";
  document.getElementById("last2").value = "";
  document.getElementById("date").value = "";
  document.getElementById("password").value = "";
}

function saveUser() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let dni = document.getElementById("dni").value;
  let last1 = document.getElementById("last1").value;
  let last2 = document.getElementById("last2").value;
  let date = document.getElementById("date").value;
  let password = document.getElementById("password").value;

  let user = new User(dni, nombre, last1, last2, email, password, date);
  let message = "";
  let points = 0;

  if (checkDni(dni)) points++;
  else message += "<li>DNI incorrecto</li>";

  if (checkRange(nombre, 3, 30)) points++;
  else if (nombre.length < 3) {
    
    message += "<li>Como mínimo 3 caracteres en el nombre</li>";
  } else {
    message += "<li>Como máximo 30 caracteres en el nombre</li>";
  }

  if (checkRange(last1, 2, 30) && checkRange(last2, 2, 30)) {
    points++;
  }
  if (last1.length < 2 ) {
    message += "<li>Como mínimo 2 caracteres en el primer apellido</li>";
  } else {
    message += "<li>Como máximo 30 caracteres en el primer apellidos</li>";
  }
   if(last2.length < 2 ) {
    message += "<li>Como mínimo 2 caracteres en el segundo apellido</li>";

  }else {
    message += "<li>Como máximo 30 caracteres en el segundo apellido</li>";
  }

  var arr = '#$()|ºª~-_<+*¿?!%/&={}+`´^;":,';
  var arrChars = arr.split("");
  if(checkPass(email) && checkSpecialStrings(email, arrChars)){
    points++
  }else{
    message +="<li>Debe de introducir un correo válido</li>"
  }

  if(checkPass(password)){
    points++
  }else{
    message += "<li>Como mínimo 8 caracteres en la contraseña</li>";
  }

  if (checkDate(date)) {
    points
  }else{
    message += "<li>La fecha tiene que tener el formato dd/MM/AAAA</li>";
  }

  document.getElementById("nombre").setAttribute("placeholder", user.name);
  document.getElementById("email").setAttribute("placeholder", user.email);
  document.getElementById("last1").setAttribute("placeholder", user.last1);
  document.getElementById("last2").setAttribute("placeholder", user.last2);
  document.getElementById("password").setAttribute("placeholder", "●●●●●●●");
  document.getElementById("date").setAttribute("placeholder", user.born);
  document.getElementById("dni").setAttribute("placeholder", user.dni);

  if(points==7){
    sendNotification("notificacion", "Usuario guardado correctamente");
  }else{
    sendNotification("notificacion", message);
    sendNotification("notificacion", "Deberá de rellenar de nuevo el formulario");
  }

  clearInput();
}

function checkDni(dni) {
  var check = false;
  var letras = "TRWAGMYFPDXBNJZSQVHLCKE".split("");

  var long = dni.length;

  var num = dni.substring(0, long - 1);

  if (long == 9) {
    let i = num;
    let resto = 0;
    while (i > 0) {
      i = i / 23;
      resto++;
    }

    if (dni[long] == letras[resto]) {
      check = true;
    }
  }

  return check;
}

function checkRange(str, min, max) {
  let check = false;

  let v = str.split("");

  if (v.length >= min && v.length <= max) {
    check = true;
  }

  return check;
}

function sendNotification(id, message) {
  return (document.getElementById(id).innerHTML = `<h3> ${message}</h3>`);
}

function checkEmptyValues(str) {
  return str.length >= 1;
}

function splitForm(classForm) {
  v = document.getElementsByClassName(classForm).form;

  let i = 0;
  let id = [];

  while (v.length > i) {
    if (v[i].type != "submit" && v[i].type != "reset") {
      id.push(v[i].id);
    }
    i++;
  }

  return id;
}

function checkDate(date) {
  let check = false;

  let v = date.split("/");

  if (v.length == 3) {
    if (parseInt(v[0]) >= 1 && parseInt(v[0]) <= 31) {
      if (parseInt(v[1]) >= 1 && parseInt(v[1]) <= 12) {
        if (parseInt(v[2]) >= 1920) {
          check = true;
        }
      }
    }
  }

  return check;
}


function checkPass(str) {
  var rtn = str.length >= 8;
  return rtn;
}

function checkMail(email) {
  check = false;

  let arrLetrs = email.split("");

  let count = countChars(email, "@");

  if (count <= 1) {
    let domain = email.slice(countLongBy(email, "@") + 1, email.length);
    let tld = domain.split(".")

    let user = email.slice(0, countLongBy(email, "@"));

    //comprobamos que haya más de un "." en el dominio
    var countDots = countChars(domain, ".");
    if (countDots >= 1 && user.length>=1 && tld[0].length>=1 && tld[1].length>=1) {
      check = true;
    }
  }

  return check;
}

//devuelve cuantos caracteres hay desde str hasta que encuentra el primer match con el char buscado

function countLongBy(str, searchChar) {
  let num = 0;
  let arrStr = str.split("");

  while (arrStr[num] != searchChar && arrStr.length>num) {
    num++;
  }

  return num;
}

//devuelve el número de veces que aparece searchChar en str
function countChars(str, searchChar) {
  let count = 0;
  let i = 0;

  while (str.length > i) {
    if (str[i] == searchChar) count++;
    i++;
  }

  return count;
}

function checkEmptyValues(email, password) {
  var continuar = false;

  if (email.length > 1 || password.length > 1) {
    continuar = true;
  }
  return continuar;
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
var email = "";
var password = "";

var usu = "admin@test.com";
var pass = "1234";

function checkUser() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (checkValues(email, password)) {
    if (checkMail(email)) {
      if (email == usu && password == pass) {
        window.location.href = "./profile.html";
      } else {
        document.getElementById("notificacion").innerHTML =
          "<h4>Usuario o contraseña incorrectos vuelve a intenterlo</h4>";
      }
    } else {
      document.getElementById("notificacion").innerHTML =
        "<h4>Debe de introducir un correo válido</h4>";
    }
  } else {
    document.getElementById("notificacion").innerHTML =
      "<h4>Campos vacios</h4>";
  }
}

function checkValues(email, password) {
  var continuar = false;

  if (email.length > 1 || password.length > 1) {
    continuar = true;
  }
  return continuar;
}

function checkMail(email) {
  check = false;

  let sim = email.split("");

  let count = 0;
  sim.forEach((value) => {
    if (value == "@") count++;
  });

  if (count <= 1) {
    let v = email;
    let domain = v.slice(searchBy(email, "@") + 1, v.length);
    let usuario = email.slice(0, searchBy(email, "@"));

    //contador de puntos

    var aux = 0;
    sim.forEach((value) => {
      if (value == ".") aux++;
    });

    if (aux >= 1) {
      check = true;
    }
  }

  return check;
}

function searchBy(email, char) {
  let num = 0;
  let sim = email.split("");
  while (sim[num] != char) {
    num++;
  }

  return num;
}

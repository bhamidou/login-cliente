export function checkMail(email) {
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

 export function checkEmptyValues(email, password) {
    var continuar = false;
  
    if (email.length > 1 || password.length > 1) {
      continuar = true;
    }
    return continuar;
  }

  export function sendNotification(id, message){
    document.getElementById(id).innerHTML =
      `<h4> ${message}</h4>`;
  }

  
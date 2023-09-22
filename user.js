
class User {
    constructor(dni, name, last1, last2, email, pass, born ) {
      this.dni = dni;
      this.name = name;
      this.last1 = last1;
      this.last2 = last2;
      this.email = email;
      this.pass = pass;
      this.born = born;
    }
  }


let user = new User("", "badr","","","","","")

var name = document.getElementById("nombre").setAttribute("placeholder",user.name) 



function checkDni(dni){
  var check = false
  var letras = "TRWAGMYFPDXBNJZSQVHLCKE".split("")

  var long = dni.length

  var num = dni.substring(0,(long-1))

  console.log(num)

  if(long == 9 ){
    let i = num
    let resto = 0
    while(i>0){
      i = i/23
      resto++
    }

    if(dni[long]==letras[resto]){
      check = true
    }
    
  }

  return check
}

function clearInput(){
   document.getElementById("nombre").value = ''
  document.getElementById("email").value = ''
  document.getElementById("dni").value = ''
  document.getElementById("last1").value = ''
  document.getElementById("last2").value = ''
  document.getElementById("date").value = ''
  document.getElementById("password").value = ''

}

function saveUser(){

  let nombre= document.getElementById("nombre").value
  let email= document.getElementById("email").value
  let dni= document.getElementById("dni").value 
  let last1= document.getElementById("last1").value 
  let last2= document.getElementById("last2").value 
  let date= document.getElementById("date").value 
  let password= document.getElementById("password").value = ''
  
  let user = new User(dni,nombre,last1,last2,email,password,date)

  document.getElementById("nombre").setAttribute("placeholder",user.name)
  
  document.getElementById("notificacion").innerHTML="<h3>test</h3>"

}



function checkRange(str, min, max){

  let check = false

  let v = str.split("")

  if(v.length>=min && v.length<=max){
    check = true
  }

  return check
}
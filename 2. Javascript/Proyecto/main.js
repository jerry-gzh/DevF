let tmpUser;

sectionMain.hidden     = true;
sectionDeposit.hidden  = true;
sectionWithdraw.hidden = true;

var usuarios = [
    {
        name: "Carlos",
        usuario:"cburguenog@gmail.com",
        pass:"contrasena123",
        balance: 100
    },
    {
        name:"jorge",
        usuario:"jorge.mendoza@gmail.com",
        pass:"jorge123",
        balance: 200
    },
    {
        name:"CC",
        usuario:"aa",
        pass:"123", 
        balance: 300
    }
]


function login( correo, password )
{
    let flagAlert = true;
    let alert = document.getElementById("liveAlert");// Relaciona alert con la clase "liveAlert"
    console.log(usuarios.length)
    for( let i=0; i < usuarios.length; i++  )
    {
        tmpUser = usuarios[i]; //  se convierte en un objeto temporal para analizar la variable usuario en iteración
        if( (correo.toLowerCase() === tmpUser.usuario.toLowerCase()) 
                && 
            ( password === tmpUser.pass  )  )
        {
            alert.classList.add("alert-primary");// Agrega esta clase a la variable alert, que está relacionada al "liveAlert" para que cambie de color 
            alert.innerText="Login Exitoso!!!"; // Agrega texto a la clase alert 
            flagAlert = false;
            sectionLogin.hidden = true;//Oculto la sección de login (el formulario)
            sectionMain.hidden = false;//Muestro la sección principal (los botones)
            break;
        }
    } // Una vez que evalua a todos los usuarios, si no encuentra el usuario y contraseña manda error 
    if( flagAlert == true )
    {
        alert.classList.add("alert-danger");
        alert.textContent = "Upps!! Revisa usuario y contraseña!!"
        tmpUser = "Error";
    } 
    setTimeout(function(){cleanMessage()}, 3000);// Ejecuta la función en determinado tiempo 
    //console.log(tmpUser);
    return (tmpUser);
}

function showBalance(userData){
  balance =  userData.balance
  let scnBalance = document.getElementById("scn-Balance");
  scnBalance.innerText = `Tu saldo actual es de: $${balance}`;
  return balance;// quitar 
}

function makeAdeposit (depositMount){
    let tmpBalance = tmpUser.balance + depositMount;
    if (tmpBalance >990){
        alert("El monto ingresado excede el límite de la cuenta")
    }else{
        tmpUser.balance += depositMount;
        console.log(`El monto ingresado es: $${depositMount} \nEl saldo total es: $${tmpUser.balance}`)
        let scnDeposit = document.getElementById("scn-Deposit");
        scnDeposit.innerText = `El monto ingresado es: $${depositMount} \nEl saldo total es: $${tmpUser.balance}`;
    } 
}

function makeAwithdraw (withdrawMount){
    let tmpBalance = tmpUser.balance - withdrawMount;
    if(tmpBalance < 10){
        alert("El monto a retirar incumple la politica bancaria")
    /* }else if(tmpUser.balance < 0){
        alert("El monto a retirar incumple la politica bancaria / no está disponible") */
    }else{ 
        tmpUser.balance -= withdrawMount;
        console.log(`El monto retirado es: $${withdrawMount} \nEl saldo total es: $${tmpUser.balance}`);
        let scnWithdraw = document.getElementById("scn-Withdraw");
        scnWithdraw.innerText = `El monto retirado es: $${withdrawMount} \nEl saldo total es: $${tmpUser.balance}`;
    }
}

function cleanMessage()
{
    let alert = document.getElementById("liveAlert");
    alert.classList.remove("alert-danger","alert-primary");
    alert.innerText="";
}

let  btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click",function()
{
    let usuario = document.getElementById("txt-user").value;
    let password = document.getElementById("txt-pass").value;
    console.log(usuario,password);
    login(usuario,password);
}); 

let btnBalance = document.getElementById("btn-balance");
btnBalance.addEventListener("click", function(){
    showBalance(tmpUser);
});

let btnDeposit = document.getElementById("btn-deposit");
btnDeposit.addEventListener("click", function(){
    sectionDeposit.hidden = false;
    sectionMain.hidden = true;
});

let btnConfirmDeposit = document.getElementById("btn-confirm-deposit");
btnConfirmDeposit.addEventListener("click", function(){
    let vdeposit = document.getElementById("txt-deposit").value;
    let deposit = parseInt(vdeposit);    
    makeAdeposit(deposit);
});

let btnWithdraw = document.getElementById("btn-withdraw");
btnWithdraw.addEventListener("click", function(){
    sectionWithdraw.hidden = false;
    sectionMain.hidden = true;
});

let btnConfirmWithdraw = document.getElementById("btn-confirm-withdraw");
btnConfirmWithdraw.addEventListener("click", function(){
    let vwithdraw = document.getElementById("txt-withdraw").value;
    let withdraw = parseInt(vwithdraw);    
    makeAwithdraw(withdraw);
});

let btnBackD = document.getElementById("btn-back-D");
btnBackD.addEventListener("click", function(){
    sectionDeposit.hidden = true;
    sectionWithdraw.hidden = true;    
    sectionMain.hidden = false;
});

let btnBackW = document.getElementById("btn-back-W");
btnBackW.addEventListener("click", function(){
    sectionWithdraw.hidden = true;    
    sectionDeposit.hidden = true;
    sectionMain.hidden = false;
});


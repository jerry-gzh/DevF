let tmpUser;
let tmpUserT;
let countNumber = 0;
let countNumberT = 0;
//let transactions =[] ;

sectionMain.hidden     = true;
sectionDeposit.hidden  = true;
sectionWithdraw.hidden = true;
sectionTransfer.hidden = true;
sectionTransactions.hidden =true;

var usuarios = [
    {
        name: "Matias",
        usuario:"mm",
        pass:"000",
        balance: 100,
        accountN: 101,
        transactions: []
    },
    {
        name:"Jorge",
        usuario:"jj",
        pass:"111",
        balance: 200,
        accountN: 102,
        transactions: []
    },
    {
        name:"Andres",
        usuario:"aa",
        pass:"123", 
        balance: 300,
        accountN: 103,
        transactions: []
    }
]


function login( correo, password ){
    let flagAlert = true;
    let alert = document.getElementById("liveAlert");
    for( let i=0; i < usuarios.length; i++  )
    {
        tmpUser = usuarios[i];
        if( (correo.toLowerCase() === tmpUser.usuario.toLowerCase()) 
                && 
            ( password === tmpUser.pass  )  )
        {
            countNumber = i;
            alert.classList.add("alert-primary");
            alert.innerText="Login Exitoso!!!";
            flagAlert = false;
            sectionLogin.hidden = true;
            sectionMain.hidden = false;
            break;
        }
    } 
    if( flagAlert == true )
    {
        alert.classList.add("alert-danger");
        alert.textContent = "Upps!! Revisa usuario y contraseña!!"
        tmpUser = "Error";
    } 
    setTimeout(function(){cleanMessage()}, 3000);
        console.log(tmpUser);
    return (tmpUser);
}

function showBalance(userData){
  balance =  userData.balance
  let scnBalance = document.getElementById("scn-Balance");
  scnBalance.innerText = `${tmpUser.name} tu saldo actual es de: $${balance}`;
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
        tmpUser.transactions.push(`Depósito       $${depositMount}          $${tmpUser.balance}`); // Prueba de arreglo 
    } 
}

function makeAwithdraw (withdrawMount){
    let tmpBalance = tmpUser.balance - withdrawMount;
    if(tmpBalance < 10){
        alert("El monto a retirar incumple la politica bancaria")
    }else{ 
        tmpUser.balance -= withdrawMount;
        console.log(`El monto retirado es: $${withdrawMount} \nEl saldo total es: $${tmpUser.balance}`);
        let scnWithdraw = document.getElementById("scn-Withdraw");
        scnWithdraw.innerText = `El monto retirado es: $${withdrawMount} \nEl saldo total es: $${tmpUser.balance}`;
        tmpUser.transactions.push(`Retiro       $${withdrawMount}          $${tmpUser.balance}`);
    }
}

function validateAccount(vAccount){
    for(let i=0; i < usuarios.length; i++)
    {
        tmpUserT = usuarios[i];
        if( tmpUserT.accountN === vAccount){
            countNumberT = i;
            scnValidation.innerText = `El titular de la cuenta es ${tmpUserT.name}`;
            break;
        }else{
            scnValidation.innerText = `La cuenta ingresada no existe`;
        }
    }
}

function cleanMessage(){
    let alert = document.getElementById("liveAlert");
    alert.classList.remove("alert-danger","alert-primary");
    alert.innerText = "";
}

let  btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click",function()
{
    let usuario = document.getElementById("txt-user").value;
    let password = document.getElementById("txt-pass").value;
    login(usuario,password);
}); 

let btnLogout = document.getElementById("btn-logout");
btnLogout.addEventListener("click",function(){
    sectionMain.hidden = true;
    sectionLogin.hidden = false;
    document.getElementById("txt-user").value = "";
    document.getElementById("txt-pass").value = "";
    usuarios.balance = tmpUser.balance[countNumber]; // Actualiza el arreglo original de usuarios 
    usuarios.balance = tmpUserT.balance[countNumberT];
    let erase = document.getElementById("scn-Balance");
    erase.innerText ="";
});

let btnBalance = document.getElementById("btn-balance");
btnBalance.addEventListener("click", function(){
    showBalance(tmpUser);
});

let btnDeposit = document.getElementById("btn-deposit");
btnDeposit.addEventListener("click", function(){
    sectionDeposit.hidden = false;
    sectionMain.hidden = true;
    let erase = document.getElementById("scn-Balance");
    erase.innerText ="";
});

let btnConfirmDeposit = document.getElementById("btn-confirm-deposit");
btnConfirmDeposit.addEventListener("click", function(){
    let vdeposit = document.getElementById("txt-deposit").value;
    let deposit = parseInt(vdeposit);
    if (!isNaN(deposit)){
        makeAdeposit(deposit);
    }else{
    alert("Ingresa un monto valido"); 
    }
    document.getElementById("txt-deposit").value = "";
});

let btnWithdraw = document.getElementById("btn-withdraw");
btnWithdraw.addEventListener("click", function(){
    sectionWithdraw.hidden = false;
    sectionMain.hidden = true;
    let erase = document.getElementById("scn-Balance");
    erase.innerText ="";
});

let btnConfirmWithdraw = document.getElementById("btn-confirm-withdraw");
btnConfirmWithdraw.addEventListener("click", function(){
    let vwithdraw = document.getElementById("txt-withdraw").value;
    let withdraw = parseInt(vwithdraw);    
    if (!isNaN(withdraw)){
        makeAwithdraw(withdraw);
    }else{
    alert("Ingresa un monto valido"); 
    }
    document.getElementById("txt-withdraw").value = "";
});

let btnBackD = document.getElementById("btn-back-D");
btnBackD.addEventListener("click", function(){
    sectionDeposit.hidden = true;
    sectionWithdraw.hidden = true;    
    sectionMain.hidden = false;
    let erase = document.getElementById("scn-Deposit");
    erase.innerText ="";
});

let btnBackW = document.getElementById("btn-back-W");
btnBackW.addEventListener("click", function(){
    sectionWithdraw.hidden = true;    
    sectionDeposit.hidden = true;
    sectionMain.hidden = false;
    let erase = document.getElementById("scn-Withdraw");
    erase.innerText ="";
});

let btnTransfer = document.getElementById("btn-transfer");
btnTransfer.addEventListener("click", function(){
    sectionMain.hidden = true;
    sectionTransfer.hidden = false;
    let erase = document.getElementById("scn-Balance");
    erase.innerText ="";
});

let btnBackT = document.getElementById("btn-back-T");
btnBackT.addEventListener("click", function(){
    sectionMain.hidden = false;
    sectionTransfer.hidden = true;
    let erase = document.getElementById("scn-transfer-validation");
    erase.innerText ="";
    document.getElementById("txt-transfer-count").value = "";
    let erase1 = document.getElementById("scn-transfer");
    erase1.innerText ="";
    document.getElementById("txt-transfer-mount").value = "";
});

let scnValidation = document.getElementById("scn-transfer-validation");
let btnValidate = document.getElementById("btn-validate");
btnValidate.addEventListener("click", function(){
    let txtTransfer = document.getElementById("txt-transfer-count").value;
    let txtTransferCount = parseInt(txtTransfer);
    validateAccount(txtTransferCount);
});

let btnConfirmTransfer = document.getElementById("btn-confirm-transfer");
let scnTransfer = document.getElementById("scn-transfer");
btnConfirmTransfer.addEventListener("click", function(){
    let txtTransferMount = document.getElementById("txt-transfer-mount").value;
    let TransferMount = parseInt(txtTransferMount);
    if (TransferMount < (tmpUser.balance - 10)){
        tmpUser.balance -= TransferMount;
        tmpUserT.balance += TransferMount;
        usuarios.balance = tmpUserT.balance[countNumberT];
        scnTransfer.innerText =`Se completo tu transferencia por $${TransferMount} a la cuenta de ${tmpUserT.name}`;
        tmpUser.transactions.push(`Transferencia a ${tmpUserT.name}      $${TransferMount}          $${tmpUser.balance}`);
        tmpUserT.transactions.push(`Transferencia de ${tmpUser.name}      $${TransferMount}          $${tmpUserT.balance}`);
    } else{
        alert(`No cuentas con fondos suficientes`)
    }
    
});

let btnTransactions = document.getElementById("btn-transactions");
let scnTransactions = document.getElementById("scn-transactions");
btnTransactions.addEventListener("click",function(){
    sectionMain.hidden = true;
    sectionTransactions.hidden = false;
    scnTransactions.innerText = `${tmpUser.transactions}`;
        let erase = document.getElementById("scn-Balance");
    erase.innerText ="";
});

let btnBackTr = document.getElementById("btn-back-Tr")
btnBackTr.addEventListener("click", function(){
    sectionMain.hidden = false;
    sectionTransactions.hidden = true;
});
var usuarios = [
    {
        name: "Carlos",
        usuario:"cburguenog@gmail.com",
        pass:"contrasena123"
    },
    {
        name:"jorge",
        usuario:"jorge.mendoza@gmail.com",
        pass:"jorge123"
    }
];
function login( correo, password )
{
    let flagAlert = true;
    let alert = document.getElementById("liveAlert");// Relaciona alert con la clase "liveAlert"
    for( let i=0; i < usuarios.length;i++  )
    {
        let tmpUsuario = usuarios[i]; // tmpusuario se convierte en un objeto temporal para analizar la variable usuario en iteración
        if( (correo.toLowerCase() === tmpUsuario.usuario.toLowerCase()) 
                && 
            ( password === tmpUsuario.pass  )  )
        {
            alert.classList.add("alert-primary");// Agrega esta clase a la variable alert, que está relacionada al "liveAlert" para que cambie de color 
            alert.innerText="Login Exitoso!!!"; // Agrega texto a la clase alert 
            flagAlert = false;
            break;
        }
    } // Una vez que evalua a todos los usuarios, si no encuentra el usuario y contraseña manda error 
    if( flagAlert == true )
    {
        
        alert.classList.add("alert-danger");
        alert.textContent = "Upps!! Revisa usuario y contraseña!!"
    }

    setTimeout(function(){cleanMessage()}, 3000);// Ejecuta la instrucción en determinado tiempo 
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
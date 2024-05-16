const formLogin = document.querySelector('.form-login')
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const boton_login = document.getElementById('boton-login');

const mensaje_usuario = document.querySelector('.mensaje-usuario');        
const mensaje_password = document.querySelector('.mensaje-password');
const mensaje_valido = document.querySelector('.mensaje-valido'); 

const expRegUsuario = /^[a-z0-9_-]{3,10}$/;
const expRegPassword = /^[a-z0-9_-]{6,18}$/;

const usu = 'orlan001'
const cont = 'admin123'

const mensaje_form =()=>{
    mensaje_valido.classList.add('msje-val');
    mensaje_valido.textContent='formulario enviado con exito..'
    setTimeout(valido, 1000);
}

function valido(){
    mensaje_valido.classList.remove('msje-val')
    mensaje_valido.textContent="";
    usuario.value="";
    password.value="";
    listadoReservas();      
};

function listadoReservas() {
    window.open("../views/panel/listadoreservas.html", "_self");        
}

formLogin.addEventListener("submit", e =>{
    e.preventDefault();

    if(expRegUsuario.test(usuario.value) && (usuario.value.trim()) == (usu)){
        mensaje_usuario.classList.remove('msje-us')
        mensaje_usuario.textContent="";
        usuario.focus();
    }else{
        mensaje_usuario.classList.add('msje-us')
        mensaje_usuario.textContent = `formato nombre usuario no valido.. ingrese: letras seguido de numeros ó caracteres, _ , - , y entre 3 y 10 caracteres`;        
        usuario.focus();
        return
    }
    
    if(expRegUsuario.test(usuario.value) && (password.value.trim()) == (cont)){
        mensaje_password.classList.remove('msje-pas');
        mensaje_password.textContent="";
        document.getElementById('boton-login').focus();

    }else{
        mensaje_password.classList.add('msje-pas');
        mensaje_password.textContent = 'formato password no valido.. ingrese: letras seguido de numeros ó caracteres  _ , - , entre 6 y 18 caracteres';
        document.getElementById('password').focus();
        return;
    }
    
    mensaje_form();
    
})
 

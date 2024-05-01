const formLogin = document.querySelector('.form-login')
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const boton_login = document.getElementById('boton-login')
const mensaje_password = document.querySelector('.mensaje-password');
const mensaje_usuario = document.querySelector('.mensaje-usuario');        
const mensaje_valido = document.querySelector('.mensaje-valido'); 

const expRegUsuario = /^[a-z0-9_-]{3,10}$/;
const expRegPassword = /^[a-z0-9_-]{6,18}$/;

const mensaje_form =()=>{
    mensaje_valido.classList.remove('d-none');
    mensaje_valido.textContent='formulario enviado con exito..'
    setTimeout(valido, 2000);
}

function valido(){
    mensaje_valido.classList.add('d-none')
};


formLogin.addEventListener("submit", e =>{
    e.preventDefault();
    if(!expRegUsuario.test(usuario.value)){
        usuario.classList.add("is-invalid")
        mensaje_usuario.classList.remove('d-none');
        mensaje_usuario.textContent = `formato nombre usuario no valido.. ingrese: numeros, letras, _ , - , entre 3 y 10 caracteres`;
    }else{
        usuario.classList.add("is-valid");
        mensaje_usuario.classList.add('d-none');
    }

    if(!expRegPassword.test(password.value)){
        mensaje_password.classList.remove('d-none');
        console.log('formato password no valido.. ingrese: numeros, letras, _ , - , entre 6 y 18 caracteres')
    }else{

    }
    mensaje_form();
})
 
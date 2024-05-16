const form_contacto = document.querySelector('.form-contacto')
const email = document.getElementById('email');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido')
const textarea = document.getElementById('textarea')
//const mensaje= documento.getElementById('mensaje');

const mensaje_email = document.querySelector('.mensaje-email');
const mensaje_nombre = document.querySelector('.mensaje-nombre');
const mensaje_apellido= document.querySelector('.mensaje-apellido');
const mensaje_textarea= document.querySelector('.mensaje-textarea');
const mensaje_valido = document.querySelector('.mensaje-valido');


const expRegValidarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//const expRegValidarNombreApellido = /[a-zñáéíóú]+/;
const expRegValidarNombreApellido= /[A-Za-zÑñÁáÉéÍíÓóÚú]+/;
//const expRegValidarNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/;

form_contacto.addEventListener('submit', e =>{
    e.preventDefault()

    const errores = []

    if(!expRegValidarEmail.test(email.value) ||(!email.value.trim())){
        errores.push({
            tipo:mensaje_email,
            msje:"formato email no valido..",
        }) 
    }else{
        mensaje_email.classList.remove('msje-error');
        mensaje_email.textContent = "";
    }
    
    if(!expRegValidarNombreApellido.test(nombre.value) || (!nombre.value.trim())){
        errores.push({
            tipo:mensaje_nombre,
            msje:"formato nombre no valido..",
        })                
    }else{
        mensaje_nombre.classList.remove('msje-error')
        mensaje_nombre.textContent = "";
    }

    if(!expRegValidarNombreApellido.test(apellido.value) || (!apellido.value.trim())){
        errores.push({
            tipo:mensaje_apellido,
            msje:"formato apellido no valido..",
        })                
    }else{
        mensaje_apellido.classList.remove('msje-error')
        mensaje_apellido.textContent = "";
    }

    if((!textarea.value.trim())){
        errores.push({
            tipo:mensaje_textarea,
            msje:"ingrese su mensaje..",
        })                
    }else{
        mensaje_textarea.classList.remove('msje-error')
        mensaje_textarea.textContent = "";
    }

    if (errores.length !== 0){
        mostrar_mensajes_error(errores)
    }else{
        mostrar_mensaje_form_enviado();
    }
})

const mostrar_mensaje_form_enviado =()=>{
    mensaje_valido.classList.add('msje-val');
    mensaje_valido.textContent = "formulario enviado con exito.."
    setTimeout(valido, 1000);
}

function valido(){
    mensaje_valido.classList.remove('msje-val')
    mensaje_valido.textContent="";
};

const mostrar_mensajes_error=(errores)=>{
    errores.forEach(items => {
        items.tipo.classList.add('msje-error');
        items.tipo.textContent = items.msje;
    });
}
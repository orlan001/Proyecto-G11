const formTurno = document.getElementById('form-turno')
//tipoVehiculo y servicios
var tipoVehiculo = document.getElementById('tipo-vehiculo')
const patente = document.getElementById('patente')
const descripcion = document.getElementById('descripcion');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora')
//Datos Personales
const dni = document.getElementById('dni');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
//Tipos de vaservicios
const tipoServicio = document.querySelectorAll('.tipo-servicio');
const descripcionTipoServicio = document.querySelectorAll('.descripcionTipoServicio');
const precio = document.querySelectorAll('.precio');

const mensaje_valido = document.querySelector('.mensaje-valido'); 
const mensaje_email = document.querySelector('.mensaje-email');

const expRegValidarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const datosFormVehiculo = [];
const datosFormPersonales = [];
const datosFormTipoServicios = [];

formTurno.addEventListener('submit', e =>{
    e.preventDefault()

    const errores = []

    if(!expRegValidarEmail.test(email.value)){
        errores.push({
            tipo:mensaje_email,
            msje:"formato email no valido..",
        })        
    }else{
        mensaje_email.textContent = "";
        mensaje_email.classList.remove('msje-email')
    }
    
    var tipoVehiculoValor = tipoVehiculo.options[tipoVehiculo.selectedIndex].value;

    const datosVehiculo = {
        tipoVehiculo: tipoVehiculoValor,
        patente: patente.value,
        descripcion: descripcion.value,
        fecha: fecha.value,
        hora: hora.value
    }

    datosFormVehiculo.push(datosVehiculo);
    console.log(datosFormVehiculo);

    
    const datosPersonales = {
        dni: dni.value,
        nombre: nombre.value,
        email: email.value,
        telefono: telefono.value,
    }
    datosFormPersonales.push(datosPersonales);
    console.log(datosFormPersonales)
    
    let i=0;

        let checkboxes = [...tipoServicio].map(check => {
        if (check.name === "tipo-servicio[]"){
                const tipoServicios = {
                    tipoVehiculo : tipoVehiculoValor,
                    tipoServicio:check.checked,
                    descripcionTipoServicio:descripcionTipoServicio[i].value,
                    precio: precio[i].value,
                }          
                i++;
                datosFormTipoServicios.push(tipoServicios);
            }
          }
        )
        console.log(datosFormTipoServicios);

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
        items.tipo.classList.add('msje-email');
        items.tipo.textContent = items.msje;
    });
}

const cargarTipoVehiculo = ()=>{
    const Vehiculos = ["auto","camioneta","moto","camion","autobus","otros"]
    const tipoVehiculo = document.getElementById('tipo-vehiculo')

    Vehiculos.forEach(items =>{
        var opciones = document.createElement('option');
        opciones.textContent = items;
        tipoVehiculo.appendChild(opciones);
    })
}

document.addEventListener("DOMContentLoaded", (event) => {
    cargarTipoVehiculo();
  });


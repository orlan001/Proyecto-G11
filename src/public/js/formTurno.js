
const tblTipoServicio = [{
    idTipoServicio:1,
    tipoServicioDescripcion:"Lavado",
},
{
    idTipoServicio:2,
    tipoServicioDescripcion:"Encerado",
},
{
    idTipoServicio:3,
    tipoServicioDescripcion:"Interior",
},
{
    idTipoServicio:4,
    tipoServicioDescripcion:"Motor",
},
{
    idTipoServicio:5,
    tipoServicioDescripcion:"Siliconado Neumatico",
}]

const tblTipoVehiculoServicio = [
    {
    idTipoVehiculoServicio: 1,
    idTipoVehiculo:1,
    idTipoServicio:1,
    precio:3000,
    },
    
    {
    idTipoVehiculoServicio: 2,
    idTipoVehiculo:1,
    idTipoServicio:2,
    precio:3500
    },
    
    {
    idTipoVehiculoServicio: 3,
    idTipoVehiculo:1,
    idTipoServicio:3,
    precio:4000,
    },
    
    {
    idTipoVehiculoServicio: 4,
    idTipoVehiculo:1,
    idTipoServicio:4,
    precio:4500,
    },
    
    {
    idTipoVehiculoServicio: 5,
    idTipoVehiculo:1,
    idTipoServicio:5,
    precio:3000,
    },
    
    {
    idTipoVehiculoServicio: 6,
    idTipoVehiculo:2,
    idTipoServicio:1,
    precio:4000,
    },
    
    {
    idTipoVehiculoServicio: 7,
    idTipoVehiculo:2,
    idTipoServicio:2,
    precio:4500,
    },
    
    {
    idTipoVehiculoServicio: 8,
    idTipoVehiculo:2,
    idTipoServicio:3,
    precio:5000,
    },

    {
    idTipoVehiculoServicio: 9,
    idTipoVehiculo:2,
    idTipoServicio:4,
    precio:5000,
    },
                        
    {
    idTipoVehiculoServicio: 10,
    idTipoVehiculo:2,
    idTipoServicio:5,
    precio:4500,
    },

    {
    idTipoVehiculoServicio: 11,
    idTipoVehiculo:3,
    idTipoServicio:1,
    precio:2500,
    },
    
    {
    idTipoVehiculoServicio: 12,
    idTipoVehiculo:3,
    idTipoServicio:2,
    precio:2500,
    },
            
    {
    idTipoVehiculoServicio: 13,
    idTipoVehiculo:3,
    idTipoServicio:3,
    precio:3000,
    },
    
    {
    idTipoVehiculoServicio: 14,
    idTipoVehiculo:3,
    idTipoServicio:4,
    precio:4000,
    },
    
    {
    idTipoVehiculoServicio: 15,
    idTipoVehiculo:3,
    idTipoServicio:5,
    precio:2000,
    },
    
    {
    idTipoVehiculoServicio: 16,
    idTipoVehiculo:4,
    idTipoServicio:1,
    precio:5000,
    },
    
    {
    idTipoVehiculoServicio: 17,
    idTipoVehiculo:4,
    idTipoServicio:2,
    precio:5000,
    },
                                                    
    {
    idTipoVehiculoServicio: 18,
    idTipoVehiculo:4,
    idTipoServicio:3,
    precio:6000,
    },

    {
    idTipoVehiculoServicio: 19,
    idTipoVehiculo:4,
    idTipoServicio:4,
    precio:6500,
    },
    
    {
    idTipoVehiculoServicio: 20,
    idTipoVehiculo:4,
    idTipoServicio:5,
    precio:4500,
    },
    
    {
    idTipoVehiculoServicio: 21,
    idTipoVehiculo:5,
    idTipoServicio:1,
    precio:7000,
    },
    
    {
    idTipoVehiculoServicio: 22,
    idTipoVehiculo:5,
    idTipoServicio:2,
    precio:6000,
    },

    {
    idTipoVehiculoServicio: 23,
    idTipoVehiculo:5,
    idTipoServicio:3,
    precio:7000,
    },

    {
    idTipoVehiculoServicio: 24,
    idTipoVehiculo:5,
    idTipoServicio:4,
    precio:7000,
    },
    
    {
    idTipoVehiculoServicio: 25,
    idTipoVehiculo:5,
    idTipoServicio:5,
    precio:6500,
    },
                                                      
] 


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

//para mostrar mensajes de error
const mensaje_valido = document.querySelector('.mensaje-valido'); 
const mensaje_email = document.querySelector('.mensaje-email');
const mensaje_fecha = document.querySelector('.mensaje-fecha');

//validar email
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
        mensaje_email.classList.remove('msje-error');
    }

    if(fecha.value.length ==0){
        errores.push({
            tipo:mensaje_fecha,
            msje:"formato fecha no valido..",            
        })        
    }else{
        mensaje_fecha.textContent = "";
        mensaje_fecha.classList.remove('msje-error');
    }

    var tipoVehiculoValor = tipoVehiculo.options[tipoVehiculo.selectedIndex].value;

    const datosVehiculo = {
        tipoVehiculo: tipoVehiculoValor,
        patente: patente.value,
        descripcion: descripcion.value,
        fecha: fecha.value,
        hora: hora.value,
    }
    datosFormVehiculo.push(datosVehiculo);
    
    const datosPersonales = {
        dni: dni.value,
        nombre: nombre.value,
        email: email.value,
        telefono: telefono.value,
    }
    datosFormPersonales.push(datosPersonales);

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
    })

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

const cargarTipoVehiculo = ()=>{
    const Vehiculos = ["auto","camioneta","moto","camion","autobus"]
    const tipoVehiculo = document.getElementById('tipo-vehiculo')
    let i= 1;
    Vehiculos.forEach(items =>{
        var opciones = document.createElement('option');
        opciones.textContent = items;
        opciones.setAttribute('value', i)
        tipoVehiculo.appendChild(opciones);
        i++;
    })
}

document.addEventListener("DOMContentLoaded", (event) => {
    cargarTipoVehiculo();
  });

 
  const listaTabla = document.querySelector('.listaTabla');
  const template = document.querySelector('template').content;
  const fragment = document.createDocumentFragment();

  tipoVehiculo.addEventListener('change', ()=>{
    let selecionOpcion = tipoVehiculo.options[tipoVehiculo.selectedIndex].value
    while(listaTabla.firstChild){
        listaTabla.removeChild(listaTabla.firstChild);
    }
    mostrarDatosTablaServicioPrecio(selecionOpcion);   
  })

const mostrarDatosTablaServicioPrecio = (e)=>{
    //insertar datos en la tabla al seleccionar tipo de vehiculo
    tblTipoVehiculoServicio.forEach((items) =>{
        if(items.idTipoVehiculo === parseInt(e)){    
            template.querySelector('#tdidTipoVehiculoServicio').textContent = items.idTipoVehiculoServicio;
            const {tipoServicioDescripcion} = tblTipoServicio.find(elemento => parseInt(elemento.idTipoServicio) === parseInt(items.idTipoServicio))
            template.querySelector('#tdidTipoServicio').textContent = tipoServicioDescripcion;
            template.querySelector('#tdPrecio').textContent = items.precio;
            const clone = template.cloneNode(true);    
            fragment.appendChild(clone);
        }
    })
    listaTabla.appendChild(fragment)
}




document.querySelector('.cnum').oninput = () => {
    document.querySelector('.card-front-num').innerText = document.querySelector('.cnum').value;
}

document.querySelector('.fname').oninput = () => {
    document.querySelector('.card-front-name').innerText = document.querySelector('.fname').value;
}

document.querySelector('.mm-input').oninput = () => {
    document.querySelector('.card-front-fecha-mes').innerText = document.querySelector('.mm-input').value;
}

document.querySelector('.yy-input').oninput = () => {
    document.querySelector('.card-front-fecha-anio').innerText = document.querySelector('.yy-input').value;
}

document.querySelector('.cvc').oninput = () => {
    document.querySelector('.card-cvc').innerText = document.querySelector('.cvc').value;
}


const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const cartelcontinue = document.getElementById('cartel__confirm');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    numero:  /^[0-9]+$/ // solo numeros
}


const campos = {
    fname: false,
    cnum: false,
    cvc: false,
}


const validarFormulario = (e) => { //para poder validar todo el formulario
    switch (e.target.name) {
        case "fname":
            validarCampoExpresiones(expresiones.nombre, e.target, 'fname');
            break;
            
            case "cnum":
                validarCampoExpresiones(expresiones.numero, e.target, 'cnum');
            break;
        
            case "cvc":
                validarCampoExpresiones(expresiones.numero, e.target, 'cvc');
                 break;
         
            }

    }
    
    const validarCampoExpresiones = (expresiones, input, campo) => {
        if(expresiones.test(input.value)){
             document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`group__${campo}`).classList.add('formulario__grupo-correcto');
             document.querySelector(`#group__error__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
             campos[campo] = true;
         }
          else {
             document.getElementById(`group__${campo}`).classList.add('formulario__grupo-incorrecto');
             document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-correcto');
             document.querySelector(`#group__error__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
             campos[campo] = false;
         }
       }


       

inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario); //keyup dice si precionas una tecla
        input.addEventListener('blur', validarFormulario); //blur dice si haces un click fuera
    });
              

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if(campos.fname && campos.cnum && campos.cvc){
            formulario.reset();
            

            document.getElementById('form').classList.add('form-container-inactivo');
         
            document.getElementById('cartel__confirm').classList.add('cartel-confirm-activo');
        
            campos.fname = false; campos.cnum = false ; campos.cvc = false
    }
        
    });


    function volverAlForm() {
        document.getElementById('cartel__confirm').classList.remove('cartel-confirm-activo');
        document.getElementById('form').classList.remove('form-container-inactivo');
        document.getElementById(`group__fname`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`group__cnum`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`group__cvc`).classList.remove('formulario__grupo-correcto');
    
    };
        
       
     
            
    


    
    
  
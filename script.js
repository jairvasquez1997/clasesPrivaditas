let boton = document.querySelector('#btn1');

boton.addEventListener('mouseover', moverBoton);

function moverBoton(){
    if (boton.classList.contains('normal')) {
        boton.classList.replace('normal', 'mover1');
    }else if(boton.classList.contains('mover1')){
        boton.classList.replace('mover1', 'mover2');
    }else if(boton.classList.contains('mover2')){
        boton.classList.replace('mover2', 'mover3');
    }else if(boton.classList.contains('mover3')){
        boton.classList.replace('mover3', 'mover4');
    }else if(boton.classList.contains('mover4')){
        boton.classList.replace('mover4', 'mover5');
    }else if(boton.classList.contains('mover5')){
        boton.classList.replace('mover5', 'normal');
    }
}
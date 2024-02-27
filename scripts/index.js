
const formulario = document.querySelector("#contenedorActividades");

formulario.addEventListener("submit",validarFormulario);

function validarFormulario(elemento){

    elemento.preventDefault(); //no recarga la pagina

    const actividad = document.querySelector("#actividad").value;
    const descripcion = document.querySelector("#descripcion").value;
    const link= document.querySelector("#link").value;

    let titulo= document.querySelector("#tituloActividad");
    let comentario= document.querySelector("#descripcionActividad");
    let imagen= document.querySelector("#imagenActividad")

    titulo.textContent= actividad;
    comentario.textContent=descripcion;
    imagen.src=link;

    

    

    
}
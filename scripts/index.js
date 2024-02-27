class Activity{

    constructor(id,title,description,imgUrl){

        this.id=id;
        this.title=title;
        this.description=description;
        this.imgUrl=imgUrl;

    }


}

class Repository{

    constructor(){

        this.activities=[];
    }
    getAllActivities(){
        
        return this.activities;
        
    }

    createActivity(arreglo){

        this.activities.push(arreglo);

    }

    deleteActivity(id){

        this.activities=this.activities.filter((item)=> item.id!==id);
    }
}

const formulario = document.querySelector("#contenedorActividades");

formulario.addEventListener("submit",validarFormulario);

function validarFormulario(elemento){

    elemento.preventDefault(); //no recarga la pagina

    let actividad = document.querySelector("#actividad").value;
    let descripcion = document.querySelector("#descripcion").value;
    let link= document.querySelector("#link").value;

    let titulo= document.querySelector("#tituloActividad");
    let comentario= document.querySelector("#descripcionActividad");
    let imagen= document.querySelector("#imagenActividad")

    titulo.textContent= actividad;
    comentario.textContent=descripcion;
    imagen.src=link;
    
    formulario.reset();
    
}
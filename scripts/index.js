class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }
  getAllActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    this.id++;
    const activity = new Activity(this.id, title, description, imgUrl);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((item) => item.id !== id);
  }
}

const prueba = new Repository();

console.log(prueba.createActivity("yoga", "es bueno", "#"));
console.log(prueba.getAllActivities());

const formulario = document.querySelector("#contenedorActividades");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(elemento) {
  elemento.preventDefault(); //no recarga la pagina

  let actividad = document.querySelector("#actividad").value;
  let descripcion = document.querySelector("#descripcion").value;
  let link = document.querySelector("#link").value;

  let titulo = document.querySelector("#tituloActividad");
  let comentario = document.querySelector("#descripcionActividad");
  let imagen = document.querySelector("#imagenActividad");

  titulo.textContent = actividad;
  comentario.textContent = descripcion;
  imagen.src = link;

  formulario.reset();
}

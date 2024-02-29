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
    this.activities = this.activities.filter((activity) => activity.id !== id); //activity recibe los valores de activities por eso se pone activity.id
  }
}

const repositorio = new Repository();

const formulario = document.querySelector("#contenedorActividades");

formulario.addEventListener("submit", function (elemento) {
  elemento.preventDefault();
  ApretarBoton();
});

function ApretarBoton() {
  const titulo = document.querySelector("#actividad").value;
  const descripcion = document.querySelector("#descripcion").value;
  const link = document.querySelector("#link").value;

  if (!titulo || !descripcion || !link)
    return alert("Debe rellenar todos los campos");
  // if (titulo == "" || descripcion == "" || link == "") {
  //   alert("Debes llenar todos los campos");
  //   return;
  // }

  repositorio.createActivity(titulo, descripcion, link);
  formulario.reset();

  crearContenedor();
}

function crearContenedor() {
  const contenedorHTML = document.querySelector(
    "#contenedorRespuestaActividad"
  );
  contenedorHTML.innerHTML = "";

  const actividades = repositorio.getAllActivities();
  const actividadesHTML = actividades.map((act) => CrearActividad(act)); //crea un nuevo array

  actividadesHTML.forEach((actHTML) => contenedorHTML.appendChild(actHTML)); //recorre y muestra las actividades
}

function CrearActividad(activity) {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedorActividades";
  contenedor.id = activity.id;

  const titulo = document.createElement("h2");
  titulo.textContent = activity.title;
  titulo.className = "tituloActividad";

  const descripcion = document.createElement("p");
  descripcion.textContent = activity.description;
  descripcion.className = "descripcionActividad";

  const imagen = document.createElement("img");
  imagen.src = activity.imgUrl;
  imagen.className = "imagenActividad";

  const botonBorrar = document.createElement("button");
  botonBorrar.className = "botonBorrar";
  botonBorrar.textContent = "Eliminar";
  botonBorrar.addEventListener("click", () => {
    repositorio.deleteActivity(activity.id);
    crearContenedor();
  });

  contenedor.appendChild(titulo);
  contenedor.appendChild(imagen);
  contenedor.appendChild(descripcion);
  contenedor.appendChild(botonBorrar);

  return contenedor;
}

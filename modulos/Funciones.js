// funciones.js
export function obtenerEventos() {
    return fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(data => data.events);
}

export function crearTarjeta(evento) {
    let card = document.createElement("div");
    card.classList.add("card", "tamañoCard", "mb-4");
    card.innerHTML = `
      <img src="${evento.image}" class="card-img-top" alt="...">
      <div class="card-body text-center">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
      </div>
      <div class="card-body align-self-center">
          <button class="btn btn-primary"> <a href="./details.html">Detalles</a></button>
      </div>
    `;
    return card;
}

export function crearCarrusel(eventos) {
    let carrusel = document.getElementById("carruselPrincipal");
    // Aquí iría el resto de tu código para crear el carrusel
    return carrusel;
}

export function actualizarLista(eventos, textoBusqueda, categoriasSeleccionadas) {
    // Aquí iría el resto de tu código para actualizar la lista
}

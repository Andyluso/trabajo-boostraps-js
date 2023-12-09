fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
        let carrusel = document.getElementById("carruselPrincipal");

        for (let i = 0; i < data.events.length; i += 4) {
            let carruselItem;
            if (i < 4) {
                carruselItem = document.createElement("div");
                carruselItem.classList.add("carousel-item", "active");
            } else {
                carruselItem = document.createElement("div");
                carruselItem.classList.add("carousel-item");
            }
            let contenedor = document.createElement("div");
            contenedor.classList.add("d-flex", "justify-content-around", "p-5", "m-5", "flex-wrap");

            for (let j = i; j < i + 4; j++) {
                if (data.events[j] != undefined) {
                    let card = document.createElement("div");
                    card.classList.add("card", "tamañoCard", "mb-4");
                    card.innerHTML = `
                        <img src="${data.events[j].image}" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">${data.events[j].name}</h5>
                            <p class="card-text">${data.events[j].description}</p>
                        </div>
                        <div class="card-body align-self-center">
                            <button class="btn btn-primary"> <a href="./details.html?id=${data.events[j]._id}">Detalles</a></button>
                        </div>
                    `;
                    contenedor.appendChild(card);
                }
            }
            carruselItem.appendChild(contenedor);
            carrusel.appendChild(carruselItem);
        }

        // Extraer las categorías únicas
        let categorias = [...new Set(data.events.map(e => e.category))];

        // Generar los checkboxes de las categorías
        let contenedorCategorias = document.getElementById('contenedorCategorias');
        categorias.forEach(categoria => {
            let div = document.createElement('div');

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = categoria;
            checkbox.addEventListener('change', actualizarLista);
            div.appendChild(checkbox);

            let label = document.createElement('label');
            label.htmlFor = categoria;
            label.textContent = categoria;
            div.appendChild(label);

            contenedorCategorias.appendChild(div);
        });

        // Agrega un event listener al campo de búsqueda
        document.getElementById('myInput').addEventListener('keyup', actualizarLista);

        // Agrega event listeners a los checkboxes
        categorias.forEach(categoria => {
            document.getElementById(categoria).addEventListener('change', actualizarLista);
        });

        function actualizarLista() {
            // Obtén el texto de búsqueda y conviértelo a minúsculas
            let textoBusqueda = document.getElementById('myInput').value.trim().toLowerCase();

            // Obtén las categorías seleccionadas
            let categoriasSeleccionadas = categorias.filter(categoria => document.getElementById(categoria).checked);

            // Filtra los eventos
            let eventosFiltrados = data.events.filter(evento =>
                evento.name.toLowerCase().includes(textoBusqueda) &&
                (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category))
            );

            // Vacía el carrusel
            carrusel.innerHTML = '';

            // Verifica si hay eventos filtrados
            if (eventosFiltrados.length > 0) {
                // Agrega solo los eventos filtrados al carrusel
                for (let i = 0; i < eventosFiltrados.length; i += 4) {
                    let carruselItem = document.createElement("div");
                    if (i < 4) {
                        carruselItem.classList.add("carousel-item", "active");
                    } else {
                        carruselItem.classList.add("carousel-item");
                    }
                    let contenedor = document.createElement("div");
                    contenedor.classList.add("d-flex", "justify-content-around", "p-5", "m-5");

                    for (let j = i; j < i + 4; j++) {
                        if (eventosFiltrados[j] != undefined) {
                            let card = document.createElement("div");
                            card.classList.add("card", "tamañoCard", "mb-4");
                            card.style.flex = "1 0 21%"; // Añade un estilo para que las tarjetas tengan un ancho mínimo del 21%
                            card.innerHTML = `
                                <img src="${eventosFiltrados[j].image}" class="card-img-top" alt="...">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${eventosFiltrados[j].name}</h5>
                                    <p class="card-text">${eventosFiltrados[j].description}</p>
                                </div>
                                <div class="card-body align-self-center">
                                <button class="btn btn-primary"> <a href="./details.html?id=${eventosFiltrados[j]._id}">Detalles</a></button>
                                </div>
                            `;
                            contenedor.appendChild(card);
                        }
                    }
                    carruselItem.appendChild(contenedor);
                    carrusel.appendChild(carruselItem);
                }
            } else {
                // Si no hay eventos filtrados, muestra un mensaje
                carrusel.textContent = 'No hay eventos que coincidan con la búsqueda.';
            }
        }
    })

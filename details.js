fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
        let urlString = window.location.href
        let urlArmada = new URL(urlString)
        let parametros = new URLSearchParams(urlArmada.search)
        let id = parametros.get('id')
        let filteredData = data.events.filter((evento) => evento._id == id)

        document.getElementById('name').innerHTML = filteredData[0].name
        document.getElementById('description').innerHTML = filteredData[0].description
        document.getElementById('date').innerHTML = filteredData[0].date
        document.getElementById('image').src = filteredData[0].image
        document.getElementById('category').innerHTML = filteredData[0].category
        document.getElementById('place').innerHTML = filteredData[0].place
        document.getElementById('price').innerHTML = filteredData[0].price
        document.getElementById('capacity').innerHTML = filteredData[0].capacity
        document.getElementById('assistance').innerHTML = filteredData[0].assistance
    })
/* fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
        let urlString = window.location.href
        let urlArmada = new URL(urlString)
        let parametros = new URLSearchParams(urlArmada.search)
        let id = parametros.get('id')
        let filteredData = data.events.filter((evento) => evento._id == id)

        document.getElementById('name').innerHTML = filteredData[0].name
        document.getElementById('category').innerHTML = filteredData[0].category
        document.getElementById('date').innerHTML = filteredData[0].date
        document.getElementById('description').innerHTML = filteredData[0].description
        document.getElementById('image').innerHTML = filteredData[0].image
        document.getElementById('place').innerHTML = filteredData[0].place
        document.getElementById('price').innerHTML = filteredData[0].price
        document.getElementById('capacity').innerHTML = filteredData[0].capacity
        document.getElementById('assistance').innerHTML = filteredData[0].assistance
    })
 */
// Realizar la solicitud a la API
fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // La funcoin para los que sean (mayor al 70%)
        function showEventsHighestAssistance() {
            const tableBody = document.createElement('tbody');

            data.events.forEach(event => {
                const attendancePercentage = (event.assistance / event.capacity) * 100;
                if (event.assistance && attendancePercentage > 80) {
                    const row = tableBody.insertRow();
                    row.innerHTML = `<td>${event.name}</td><td>${attendancePercentage.toFixed(2)}%</td>`;
                }
            });

            document.getElementById('eventsHighestAssistanceTable').appendChild(tableBody);
        }

        // la funcion para las que sean (menor o igual al 70%)
        function showEventsLowestAssistance() {
            const tableBody = document.createElement('tbody');

            data.events.forEach(event => {
                const attendancePercentage = (event.assistance / event.capacity) * 100;
                if (event.assistance && attendancePercentage <= 80) {
                    const row = tableBody.insertRow();
                    row.innerHTML = `<td>${event.name}</td><td>${attendancePercentage.toFixed(2)}%</td>`;
                }
            });

            document.getElementById('eventsLowestAssistanceTable').appendChild(tableBody);
        }

        // este codigo es para las asistencias que sean (mayor a 300000)
        function showEventsLargerCapacity() {
            const tableBody = document.createElement('tbody');

            data.events.forEach(event => {
                if (event.capacity > 300000) {
                    const row = tableBody.insertRow();
                    row.innerHTML = `<td>${event.name}</td><td>${event.capacity}</td>`;
                }
            });

            document.getElementById('eventsLargerCapacityTable').appendChild(tableBody);
        }

        // Llamar a las funciones para mostrar los datos en las tablas correspondientes con los filtros aplicados
        showEventsHighestAssistance();
        showEventsLowestAssistance();
        showEventsLargerCapacity();
    })

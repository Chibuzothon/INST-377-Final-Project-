const host = window.location.origin;
// const host = 'http://localhost:3000'

async function createPilot() {
    console.log('Creating Pilot')
    await fetch(`${host}/pilot`,{
        method: 'POST',
        body: JSON.stringify({
            firstName: `${document.getElementById('firstName').value}`,
            lastName: `${document.getElementById('lastName').value}`,
            pilotCity: `${document.getElementById('cityInput').value}`,
        }),
        headers: {
            'Content-Type':'application/json'
    
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Pilot created:', data);
        loadPilotData(); 
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

    // await loadPilotData();
    
}


async function loadPilotData() {
    await fetch(`${host}/pilots`)
    .then((res) => res.json())
    .then((resJson) => {
        console.log(resJson);
        const table = document.createElement('table')
        // const table = document.getElementById('pilotHistoryTable')
        table.setAttribute('id', 'pilotInfo')

        const tableRow = document.createElement('tr')

        const tableHeading1 = document.createElement('th')
        tableHeading1.innerHTML = 'First Name'
        tableRow.appendChild(tableHeading1)

        const tableHeading2 = document.createElement('th')
        tableHeading2.innerHTML = 'Last Name'
        tableRow.appendChild(tableHeading2)

        const tableHeading3 = document.createElement('th')
        tableHeading3.innerHTML = 'City'
        tableRow.appendChild(tableHeading3)

        table.appendChild(tableRow)

        resJson.forEach(pilot => {
            const pilotTableRow = document.createElement('tr')
            const pilotTableFirstName = document.createElement('td')
            const pilotTableLastName = document.createElement('td')
            const pilotTableCity = document.createElement('td')

            //double check how the JSON stores the pilot name &n city
            pilotTableFirstName.innerHTML = pilot.pilot_first_name;
            pilotTableLastName.innerHTML = pilot.pilot_last_name;
            pilotTableCity.innerHTML = pilot.pilot_city;

            pilotTableRow.appendChild(pilotTableFirstName)
            pilotTableRow.appendChild(pilotTableLastName)
            pilotTableRow.appendChild(pilotTableCity)

            table.appendChild(pilotTableRow)
        })

        const preExistingTable = document.getElementById('pilotInfo')
        if (preExistingTable) {
           preExistingTable.remove() 
        }

        document.getElementById('table-area').appendChild(table)
        // table.appendChild(pilotTableRow)
    })
}

window.onload = loadPilotData;
async function createPilot() {
    console.log('Creating Pilot')
    await fetch('http://localhost:3000/pilot',{
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
    
}
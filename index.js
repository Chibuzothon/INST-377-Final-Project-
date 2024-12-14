const express = require('express')
const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/frontend'))


const urlSupabase = 'https://xumavszsshyutvuenwey.supabase.co'
const apikeySupabase ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bWF2c3pzc2h5dXR2dWVud2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2MzgwNjEsImV4cCI6MjA0OTIxNDA2MX0.3OSp74M39oEzKGduiJVt-Rqd6L3E81IV-8SFogPBRjQ'
// client is used to make it easy to connect and querry from the supabase database
//allows us to get the data using commands
const supabase = supabaseClient.createClient(urlSupabase, apikeySupabase);


app.get('/',(req, res) => {
    res.sendFile('frontend/projectfunctionality.html', { root: __dirname })
})





// want to get all pilots
app.get('/pilots', async (req, res) =>{
    console.log("Attempting to get all pilots.")

    const {data, error} = await supabase
        .from ('pilot')
        .select()


    if(error) {
        console.log('Error:', error)
        res.send(error)
    }else{
        console.log('Successfully Retrieved Data')
        res.send(data)
    }
})

   
// want to add a singular pilot
app.post('/pilot', async (req, res) => {
    console.log("Attempting to add a pilot")
    console.log("Request", req.body)

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const pilotCity = req.body.pilotCity

    const {data, error} = await supabase.from('pilot')
    .insert({
        pilot_first_name: firstName, 
        pilot_last_name: lastName, 
        pilot_city: pilotCity
    })
    .select()

    if (error) {
        console.log('Error:', error)
        res.send(error)
    }   else{
        console.log('Successfully Retrieved Data')
        res.send(data)
    }
})


app.listen(port, () => {
    console.log('App is Working')
})








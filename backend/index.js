const express = require('express')
const supabaseClient = require('@supabase/supabase-js')


const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))


const urlSupabase = ' https://xumavszsshyutvuenwey.supabase.co'
const apikeySupabase = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bWF2c3pzc2h5dXR2dWVud2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2MzgwNjEsImV4cCI6MjA0OTIxNDA2MX0.3OSp74M39oEzKGduiJVt-Rqd6L3E81IV-8SFogPBRjQ'
// client is used to make it easy to connect and querry from the supabase database
//allows us to get the data using commands


const supabase = supabaseClient.createClient(urlSupabase, apikeySupabase);




// want to get all pilots
app.get('/pilots', (req, res) =>{
    console.log("Attempting to get all pilots.")
    res.send('It sends something')
})


// want to add a singular pilot
app.post('/pilot', (req, res) => {
    console.log("Attempting to add a pilot")
})


app.listen(port, () => {
    console.log('App is Working')
})








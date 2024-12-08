const express = require("express")
// we want to get a list of customets from out customers
// to do this create a supabase client
const supabaseClient = require('@supabase/supabase-js')
const bodyparser = require('body-parser')
const bodyParser = require("body-parser")
const {isValidStateAbbreviation} = require("usa-state-validator")


const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://jptwaprzaywkuvxitmvn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdHdhcHJ6YXl3a3V2eGl0bXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNzY1NzYsImV4cCI6MjA0ODc1MjU3Nn0.bcN1Mtz96HWuaypsz-lccG8j4J0pgbe3fNL2-S75qcQ'
// for the group project can share 1 suapbase instance
const supabase = supabaseClient.createClient(supabaseUrl,supabaseKey);

app.get('/customers', async (req, res) =>{
    // note we use customers plural bc we want to get all the customers
    console.log("Attempting to get all Customers");

    const {data, error} = await supabase
        .from('customer')
        .select();
    
    console.log('Data Retrived:', data); // tells us if it is sucessful
    console.log('Error:', error); //tells us if there is an error
    res.send(data);

});


app.post('/customer', async (req, res) => {
    console.log("Attempting to add Customer.")

    console.log("Request", req.body)

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userState = req.body.userState;

    if(!isValidStateAbbreviation(userState)) {
        console.error(`State ${userState} is Invalid:(`)
        res.statusCode = 400;
        res.header("Content-Type", "application/json")
        const stateInvalidErrorJson = {
            message: `${userState} is not a vlaid State Abbreviation`,
        };
        res.send(JSON.stringify(stateInvalidErrorJson));
        return;
    }

    const {data, error} = await supabase
    .from('customer')
    .insert({
        customer_first_name: firstName,
        customer_last_name: lastName, 
        customer_state:userState,
    })
    .select();

    if (error) {
        console.log('Error', error)
        res.send(error)
     }  else{
        console.log("Sucessfully Retrieved Data")
        res.send(data);
     }   
});

// we say customer singluar bc we want to add a single customer
app.listen(port, () =>{
    console.log("App is ALIVEEEE")
})
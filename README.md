# INST-377-Final-Project



## Project Description

This full-stack web application assists pilots in retrieving location-specific information such as weather, environmental conditions, and coordinates. 

It also allows pilots to record their travel history for future reference. The app provides an intuitive and responsive user experience.



## Target Browsers

The application supports modern browsers such as:

- Google Chrome

- Mozilla Firefox

- Microsoft Edge

- iOS Safari



## Links

- [Vercel Live Deployment](https://inst-377-final-project-beryl.vercel.app/)




---



## Developer Manual



### Installation

1. Clone the repository: `git clone (repo link)`

2. Navigate to the project directory: `cd INST-377-Final-Project`
  
3. Install dependencies: `npm install` (for both frontend and backend).
   
5. Install express: npm install express 

6. Install the supabase client via npm: npm install @supabase/supabase-js

7. Install Nodemon: Npm install nodemon


### Running the Application

1. Start the backend server: `node backend/server.js`

2. Start the frontend development server: `npm start` (in the frontend directory).

## How to Run tests for software:
1. Check if the Weather API displays the data for the city:
    a. On the functionality page type in the Pilot's first name, last name & the city traveling to in the respective text boxes
     b. Click the "Get Weather Info" button    
     c. Check if the location information, weather information & environmental conditions displays 
3. Check if the location API displays the city on the map
4. Check if the table in the history page updates with new entries


### API Documentation

- **GET /api/pilots**: Retrieves all pilot entries from the database.

- **POST /api/pilot**: Saves new pilot entry to the database.



### Known Bugs and Roadmap

- Known Bugs:

  - N/A

- Roadmap:

  - Add more detailed environmental information.

  - Integrate live air traffic data.
    
  - Using a deployment server that can handle a lot of user traffic
 
    



---



## Team

- Marylyn: Backend Development and Deployment

- Favor: Frontend About Page and Documentation

- Demetri: Frontend Home and Project Functionality Pages

- Adam: Designer

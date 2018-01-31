const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
 
require('dotenv').config();
 
const app = express();
 
app.use(bodyParser.json());
 
massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
  
    // Initialize user table and vehicle table.
    db.init_tables.user_create_seed().then( response => {
      console.log('User table init')
      db.init_tables.vehicle_create_seed().then( response => {
        console.log('Vehicle table init')
      })
    })
  }).catch(error => {
    console.log('error', error)
})

app.get('/api/users', controller.getUsers)
app.get('/api/vehicles', controller.getVehicles)
app.post('/api/users', controller.addUser)
app.post('/api/vehicles', controller.addVehicle)
app.get('/api/user/:userId/vehiclecount', controller.vehicleCountById)
app.get('/api/user/:userId/vehicle', controller.vehiclesById)
app.get('/api/vehicle', controller.vehiclesByEmail)
app.get('/api/newervehiclesbyyear', controller.vehiclesByYear)
app.put('/api/vehicle/:vehicleId/user/:userId', controller.updateOwner)
app.delete('/api/user/:userId/vehicle/:vehicleId', controller.removeOwner)
app.delete('/api/vehicle/:vehicleId', controller.deleteVehicle)

const port = 3000
app.listen(port, () => console.log('listening on port ' + port));
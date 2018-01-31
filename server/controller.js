module.exports = {
    getUsers: (req, res) => {
        const db =  req.app.get('db')
        
        db.getUsers().then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('get users error', error))
    }, 
    getVehicles: (req, res) => {
        const db =  req.app.get('db')
        
        db.getVehicles().then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('get vehicles error', error))
    },
    addUser: (req, res) => {
        const db =  req.app.get('db')
        const { name, email } = req.body
        
        db.addUser([name, email]).then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('add user error', error))
    },
    addVehicle: (req, res) => {
        const db =  req.app.get('db')
        const { make, model, year, owner_id } = req.body
        
        db.addVehicle([make, model, year, owner_id]).then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('add vehicle error', error))
    },
    vehicleCountById: (req, res) => {
        const db =  req.app.get('db')
        
        db.vehicleCountById([req.params.userId]).then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('vehicle count by id error', error))
    },
    vehiclesById: (req, res) => {
        const db =  req.app.get('db')
        
        db.vehiclesById([req.params.userId]).then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('vehicles by id error', error))
    },
    vehiclesByEmail: (req, res) => {
        const db =  req.app.get('db')
        
        if(req.query.userEmail){
            return db.vehiclesByEmail([req.query.userEmail]).then(response => {
                res.status(200).json(response)
            }).catch(error => console.log('vehicles by email error', error))
        } else if(req.query.userFirstStart){
            return db.vehiclesByLetters([req.query.userFirstStart + '%']).then(response => {
                res.status(200).json(response)
            }).catch(error => console.log('vehicles by letters error', error))
        }
    },
    vehiclesByYear: (req, res) => {
        const db =  req.app.get('db')
        const { year } = req.body
        
        db.vehiclesByYear().then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('vehicles by year error', error))
    },
    updateOwner: (req,res) => {
        const db =  req.app.get('db')
        const { userId, vehicleId } = req.params
        
        db.updateOwner([userId, vehicleId]).then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('update owner error', error))
    },
    removeOwner: (req,res) => {
        const db =  req.app.get('db')
        const { vehicleId } = req.params
        
        db.removeOwner([vehicleId]).then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('update owner error', error))
    },
    deleteVehicle: (req,res) => {
        const db =  req.app.get('db')
        const { vehicleId } = req.params
        
        db.deleteVehicle([vehicleId]).then(response => {
            res.status(200).json(response)
        }).catch(error => console.log('update owner error', error))
    }
}
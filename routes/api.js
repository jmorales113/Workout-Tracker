const mongoose = require('mongoose')
const db = require('../models')



function apiRoutes(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then((result) =>{
            res.json(result)
        }).catch((error) => {
            res.json(error)
        })
    })

    app.post("/api/workouts", (req, res) =>{
        db.Workout.create({})
        .then((result) =>{
            res.json(result)
        }).catch((error) =>{
            res.json(error)
        })
    })
}












module.exports = apiRoutes

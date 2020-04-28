const mongoose = require('mongoose')
const db = require('../models')

// db.Workout.find({})
// db.Workout.create({})
// db.Workout.findByIdAndUpdate
// db.Workout.find({}).limit(7)

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

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            {
                _id: req.params.id
            },
            {$push: {exercises: req.body}},
            {
                new: true
            }
            
        )
        .then((result) => {
            res.json(result)
        }).catch((error) =>{
            res.json(error)
        })
    })
}












module.exports = apiRoutes

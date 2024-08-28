const express = require('express')
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//require auth for all workouts routes
router.use(requireAuth)


//GET all workouts
router.get('/', getWorkouts)

//GET single workout
router.get('/:title', getWorkout)

//POST new workout
router.post('/',createWorkout)

//DELETE new workout
router.delete('/:id',deleteWorkout)

//UPDATE new workout
router.patch('/:id', updateWorkout)

module.exports = router
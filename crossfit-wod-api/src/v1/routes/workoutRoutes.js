// In src/v1/routes/workoutRoutes.js
const express = require("express")

const workoutController = require("../../controller/workoutController")
const router = express.Router();

// This is how we define our end points in the workout router
router.get("/",workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout );

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateWorkout);

router.delete("/:workoutId", workoutController.deleteWorkout);

module.exports = router; 
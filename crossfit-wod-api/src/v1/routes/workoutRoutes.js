// In src/v1/routes/workoutRoutes.js
const express = require("express")
const router = express.Router();

// This is how we define our end points in the workout router
router.get("/", (req, res)=>{
 res.send("GET all workouts")
});

router.get("/:workoutId",(req, res)=>{
    res.send("GET an existing workout")
});
router.post("/", (req, res)=> {
    res.send("Create a new workout")
});

router.patch("/:workoutId", (req, res) =>{
res.send("Update an existing workout")
});

router.delete("/:workoutId", (req, res) =>{
    res.send("Delete an existing workout")
});

module.exports = router; 
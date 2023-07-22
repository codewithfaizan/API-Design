const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//... remove 
// const v1Router = require("./v1/routes") 

//... add
const v1WorkoutRouter = require("./v1/routes/workoutRoutes") 

// ...remove
// app.use("/api/v1", v1Router)

// ... add 
app.use("/api/v1/workouts", v1WorkoutRouter)

app.listen(PORT,()=>{
    console.log("Api is listening on Port", PORT)
})
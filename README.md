<h1> REST API Design Best Practices </h1> 

<h3> How to Build a REST API with JavaScript, Node.js, and Express.js</h3>

<b><i>Note</i></b>- Best practices are not specific laws or rules to follow. They are conventions or tips that have evolved over time and turned out to be effective.

### About the Project
<ul>
<li>A REST API for a CrossFit Training Application</li>
<li>If you're not familiar with CrossFit, it's a fitness method and competitive sport that combines high-intensity workouts with elements from several sports (olympic weightlifting, gymnastics, and others).</li>
<li>In the application there're create, read, update and delete WOD's (Workouts of the Day).</li>
<li>This will help our users (that will be gym owners) come up with workout plans and maintain their own workouts inside a single application</li>
</ul>

### Architecture
<p>A Three Layer Architecture using Express.js for the API  </p>
<ul>
<h5>Controller</h5> <p>Inside the Controller we'll be handling all stuff that is related to HTTP. That means we're dealing with requests and responses for our endpoints. </p>
<h5>Router</h5><p>Above that layer is also a little Router from Express that passes requests to the corresponding controller.</p>
<h5>Service Layer</h5> <p>The whole business logic will be in the Service Layer that exports certain services (methods) which are used by the controller.</p>
<h5>Data Access Layer</h5> <p>The third layer is the Data Access Layer where we'll be working with our Database. In our example we're not using a real database such as MongoDB or PostgreSQL because I'd like to focus more on the best practices itself. Therefore we're using a local JSON file that mimics our Database. But this logic can be transferred to other databases of course.</p>
</ul

<h3>Basic Setup</h3>

```bash
echo "Faizaaannn!!! let's begin"
```
### Create project folder & navigate into it
```bash
mkdir crossfit-wod-api && cd crossfit-wod-api
```

### Create a src folder & navigate into it
```bash
mkdir src && cd src
```
### Create sub folders
```bash
mkdir controllers && mkdir services && mkdir database && mkdir routes

```

### Create an index file (entry point of our API)
```bash
touch index.js
```
### We're currently in the src folder, so we need to move one level up first 
```bash
cd .. 
```
### Create package.json file 
```bash
npm init -y
```

<h4>Install dependencies for the basic setup: </h4>

### Dev Dependencies 
```bash
npm i -D nodemon 
```

### Dependencies 
```bash
npm i express
```

<h4>Open the project and configure Express:</h4>

```bash
// In src/index.js 
const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
```
<h4> Integrate a new script </h4>

```bash
{
  "name": "crossfit-wod-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}

```
### Why the Script inside package.json ??
The script makes sure that the development server restarts automatically when we make changes (thanks to nodemon).

### Now start the development server
```bash
npm run dev 
```
Look at your terminal, and there should be a message that the "API is listening on port 3000".

Visit localhost:3000 inside your browser. When everything is setup correctly. <br> 
The endpoint should be : <b> localhost:3000/api/v1 </b>

## Name Resources in Plural
Let's start with our fundamental CRUD endpoints.
let's start implementing endpoints for creating, reading, updating and deleting workouts.

# REST API Best Practices
Let's start simple with our fundamental CRUD endpoints. After that we'll be extending the API with each best practice.

### Versioning
Before we write any API-specific code we should be aware of versioning. Like in other applications there will be improvements, new features, and stuff like that. So it's important to version our API as well.

The current and new versions are basically running in parallel and don't affect each other.
## Note : 
But how can we differentiate between the versions? One good practice is to add a path segment like v1 or v2 into the URL.
```bash
// Version 1 
"/api/v1/workouts" 

// Version 2 
"/api/v2/workouts" 

// ...
```
There are many different approaches to handling versioning inside an Express API. In our case I'd like to create a sub folder for each version inside our src directory called v1.





### Name Resources in Plural
Go to the directory of crossfit-wod-api on the command line and create the below files
```bash
touch src/controllers/workoutController.js 

touch src/services/workoutService.js 

touch src/v1/routes/workoutRoutes.js
```




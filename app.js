const express = require("express");
const connectMongodb = require("./db/MongoDB")
const todoRoutes = require("./routes/routes-todo")
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const port = 4000;
// const { title } = require("process");

const app = express();
dotenv.config();
connectMongodb();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', todoRoutes);


module.exports = app;
    

// app.listen(port);
    
//         console.log("Error Message!")
// app.get('/', (req, res) => {
//     res.send('<h1 style="color : red;">My Name is Don Picasso</h1>');
// });


// app.get('/add-item', (req, res) => {
//     res.send('<h2>Add Item </h2>');
// });


// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', {root: __dirname})
// });



// app.get('/', async(req, res, next) => {
//     try {
//         const todos = await Todo.find({});
//         res.render("index", {title: "Todo List || Application", todos})
//     } catch (error) {
//         res.status(500).json
//         ({message: error.message})
//     }
// });

// app.get('/add-todo', (req, res) => {
//     try {
//         res.render("newTodo", {title: "New todo"})
//     } catch (error) {
//         res.status(500).json
//         ({message: error.message})
//     }
// });

// app.get('/update-todo', (req, res) => {
//     try {
//         res.render("updateTodo", {title: "UPDATE todo"})
//     } catch (error) {
//         res.status(500).json
//         ({message: error.message})
//     }
// });

// app.get('/delete-todo', (req, res) => {
//     try {
//         res.render("deleteTodo", {title: "Delete todo"})
//     } catch (error) {
//         res.status(500).json
//         ({message: error.message})
//     }
// });

// app.post('/add-todo', async(req, res, next) => {
//     try {
//         const {title, desc} = req.body
//         if(!title){
//             return res.status(400).json({message: "Title is required"});
//         }
//         const newTodo = new Todo({title, desc}); // will create a document 
//         await newTodo.save();
//         res.redirect("/")

//     } catch (error) {
//     }
// });


// app.listen(port, () => {
// console.log(`Server is running on port  ${port}`)
// });
import express from "express";
import mongoose from "mongoose";
import Products from "./dbProducts.js";
import Cors from "cors";
// App Config password 
const app = express();
const port = process.env.PORT || 8001;
const USERNAME = "YosefBlandin";
const PASSWORD = 27622771;
const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.0veij.mongodb.net/machetedb?retryWrites=true&w=majority`

// Middlewares
app.use(express.json());
app.use(Cors())

//  DB Config
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// API Endpoints
app.get('/', (req,res) => {
   return  res.status(200).send("Hello World")
} );

app.post('/products', (req,res) => {
    const dbProduct = req.body;

    Products.create(dbProduct, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get("/products", (req,res) => {
    Products.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:  ${port}`))
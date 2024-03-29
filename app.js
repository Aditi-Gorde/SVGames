const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const router = require("./routes/Game-routes");
const userRouter = require("./routes/userRoutes");

// Create an instance of the Express.js server
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // Parse JSON requests
app.use(express.json());
app.use("/games", router);
app.use("/users", userRouter);


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Games REST API',
            description: "A REST API built with Express and MongoDB. This API provides games list and the CRUD operations for games."
        },
    },
    apis: ["./routes/Game-routes.js", "./routes/userRoutes.js"]
}


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const mongoURI = 'mongodb+srv://aditigorde1002:OJh2u6Sppq13XZVJ@cluster0.w2v4yav.mongodb.net/'

//Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  // Start the Express.js server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
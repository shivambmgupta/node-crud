import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './router/router.js'
import * as Const from './constants/constants.js';
import cors from 'cors';
import responseController from './controllers/responseController.js';

dotenv.config(); // configuring the env file

const app = express();
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

// Welcome message to the user.
app.get("/", (req, res) => {
    responseController(req, res, Const.Status.ok);
});

app.use("/api", router);

const PORT_NUMBER = process.env.PORT_NUMBER || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log(Const.DB_CONNECTED)
        app.listen(PORT_NUMBER, () => {
            console.log(Const.SERVER_UP)
        })
    })
    .catch(() => {
        // Log error. Unable to connect with the database
        console.log(Const.DB_CONNECTION_ERR);
    });
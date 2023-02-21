const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect()
    .then(() => {
        app.listen(process.env.PORT || 5000)
    })
    .catch(err => console.log(err))
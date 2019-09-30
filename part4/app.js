const config = require('./utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const mongoose = require('mongoose');
const middleware = require('./utils/middleware');

mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/blogs', blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;

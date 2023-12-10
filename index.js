require('dotenv').config();
const cors = require('cors');
const express = require('express');

const port = process.env.PORT;

// Routes
const testRoutes = require('./routes/test');

const errorHandler = (error, req, res, next) => {
  const status = error.status || 422;
  res.status(status).send(error.message);
}

const app = express();

app.use(express.json());
app.use(cors());

// Register routes
app.use('/api', testRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
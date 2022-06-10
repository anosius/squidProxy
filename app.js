const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const rulesRouter = require('./routes/rulesRoutes');


const app = express();

// Middlewarea

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
  app.use(express.json());
  app.use(express.static(`${__dirname}/public`));
  
  app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });
  


  // Routes
app.use('/api/v1/rules', rulesRouter);
// app.use('/api/v1/users', userRouter);

module.exports = app;

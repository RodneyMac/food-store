
import express from 'express';
import morgan from 'morgan';
import orderRouter from '../router/order.routes.js';
import cors from 'cors';

const App = express();

// Middlewares
App.use(express.json());
App.use(morgan('dev'));
App.use(cors());


// Routes
App.use('/order', orderRouter);
App.use(express.static('../client'));

export default App;
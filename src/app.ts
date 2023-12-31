import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { carsRouter } from './routes/carsRoutes';

export const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', carsRouter)
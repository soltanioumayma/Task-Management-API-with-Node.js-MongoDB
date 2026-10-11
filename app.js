import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks.routes.js';
import authRouter from './routes/auth.routes.js';


const app = express();

app.use(cors());

app.use(express.json());


app.use('/api/auth', authRouter);
app.use('/api/tasks', tasksRouter);


export default app;
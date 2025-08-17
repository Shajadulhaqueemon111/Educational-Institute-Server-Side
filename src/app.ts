import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/route';
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use('/api/v1', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;

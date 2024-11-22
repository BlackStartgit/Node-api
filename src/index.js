import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router as usersRouter } from './routes/users.js';
import { errorHandler } from './middleware/errorHandler.js';
import { config } from './config/index.js';

const app = express();

app.use(cors(config.cors));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the API',
    version: '1.0.0',
    env: config.nodeEnv
  });
});

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
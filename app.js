import express from 'express';
import indexRoute from './routes/index.js';

const app = express();
const port = 3333;

app.use(express.json());
app.use('/api', indexRoute);

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
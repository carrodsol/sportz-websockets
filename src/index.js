import express from 'express'
import { matchRouter } from './routes/matches.js';

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
// Route
app.get('/', (req, res) => {
    res.send('Hello from Express Server!');
});

app.use('/matches', matchRouter)

// Login
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

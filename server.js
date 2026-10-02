import app from './app.js';
import { connectDB } from './config/db.js';

await connectDB('mongodb://localhost:27017/tp');

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
// server.js
import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';

const app = express();
connectDB(); // Conectar a MongoDB

app.use(express.json()); // Necesario para leer req.body
app.use("/api/notes", notesRoutes);

app.listen(5001, () => 
    console.log("Server started on PORT: 5001")
);

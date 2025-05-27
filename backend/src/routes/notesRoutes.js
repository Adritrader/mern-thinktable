import express from 'express';
import { getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController.js";


const router = express.Router();

router.get("/", getAllNotes);

//Create notes

router.post("/", createNote);

//Update

router.put("/:id", updateNote);

//Delete

router.delete("/:id", deleteNote);




export default router;
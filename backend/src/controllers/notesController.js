import Note from "../models/note.js";

export async function getAllNotes(req, res) {
    const notes = await Note.find();
    res.status(200).json(notes);
};

export async function createNote(req, res) {
    const { title, content, important } = req.body;

    const newNote = new Note({ title, content, important });
    await newNote.save();

    res.status(201).json({ message: "Nota creada correctamente", note: newNote });
};

export async function updateNote(req, res) {
    const { id } = req.params;
    const updated = await Note.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({ message: "Nota actualizada", updated });
};

export async function deleteNote(req, res) {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);

    res.status(200).json({ message: "Nota borrada correctamente" });
};

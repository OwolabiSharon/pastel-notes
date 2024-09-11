import { Request, Response } from 'express';
import Note, { INote } from '../models/Note';

// Create a new note
export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newNote: INote = new Note({
      title,
      content,
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: 'Error creating note' });
  }
};

// Get all notes
export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching notes' });
  }
};

// Delete a note by ID
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting note' });
  }
};

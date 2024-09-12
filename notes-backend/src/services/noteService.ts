import { Request, Response } from 'express';
import Note, { INote } from '../models/Note';
import mongoose from 'mongoose';
import Joi from 'joi';

// Joi schema for note validation
const noteSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(5).required(),
});

// Create a new note with validation
export const createNote = async (req: Request, res: Response) => {
  try {
    const { error } = noteSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { title, content } = req.body;
      
    const newNote: INote = new Note({ title, content });
    const savedNote = await newNote.save();
      
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: 'Error creating note' });
  }
};

// Get all notes (no validation needed here)
export const getNotes = async (req: Request, res: Response) => {
  try {
    
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching notes' });
  }
};

// Delete a note by ID with ID validation
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ error: 'Note not found' });
      
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting note' });
  }
};

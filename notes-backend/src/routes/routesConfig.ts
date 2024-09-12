import { Router } from 'express';
import { createNote, getNotes, deleteNote } from '../services/noteService';

const router = Router();

// Route to create a new note
router.post('/notes', createNote);

// Route to get all notes
router.get('/notes', getNotes);

// Route to delete a note by ID
router.delete('/notes/:id', deleteNote);


export default router;

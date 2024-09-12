"use client";

import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

interface NoteContentProps {
  showNoteForm: boolean;
  setShowNoteForm: (state: boolean) => void;
  noteTitle: string;
  setNoteTitle: (title: string) => void;
  noteContent: string;
  setNoteContent: (content: string) => void;
  handleSaveNote: () => void;
  handleCancel: () => void;
  selectedNote: number | null;
  isEditing: boolean;
  handleEditNote: () => void;
  handleUpdateNote: () => void;
  notes: { title: string; content: string }[];
  isNewNote: boolean;
}

const NoteContent: React.FC<NoteContentProps> = ({
  showNoteForm,
  noteTitle,
  setNoteTitle,
  noteContent,
  setNoteContent,
  handleSaveNote,
  handleCancel,
  selectedNote,
  isEditing,
  handleEditNote,
  handleUpdateNote,
  notes,
  isNewNote,
}) => {
  // Check if selectedNote is within bounds
  const selectedNoteData =
    selectedNote !== null && selectedNote >= 0 && selectedNote < notes.length
      ? notes[selectedNote]
      : { title: "", content: "" };

  const isReadOnly = !isEditing && selectedNote !== null && !isNewNote;

  return (
    <div className="h-full flex-grow p-10 pb-5">
      {(showNoteForm || selectedNote !== null) && (
        <div className="flex flex-col gap-5 h-full">
          <div className="flex items-center justify-between">
            {/* Title input */}
            <input
              type="text"
              placeholder="Title"
              value={
                isNewNote || isEditing ? noteTitle : selectedNoteData.title
              }
              onChange={(e) => setNoteTitle(e.target.value)}
              className={`text-5xl font-bold outline-none bg-transparent ${
                isReadOnly ? "bg-gray-100" : ""
              }`}
              readOnly={isReadOnly}
            />
            {/* Buttons for Save/Update and Cancel */}
            <div className="flex gap-4">
              {isEditing ? (
                <button
                  onClick={handleUpdateNote}
                  className="text-neutral-400 text-2xl"
                >
                  <FiEdit3 />
                </button>
              ) : isNewNote ? (
                <div className="flex gap-4">
                  <button
                    onClick={handleSaveNote}
                    className="text-neutral-400 px-4 py-2 rounded-xl border border-white/20"
                  >
                    Save Note
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-red-400 px-4 py-2 rounded-xl border border-red-400/50 hover:bg-red-400 hover:text-white transition-all duration-200 ease-in-out"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEditNote}
                  className="text-neutral-400 text-2xl"
                >
                  <IoBookOutline />
                </button>
              )}
            </div>
          </div>

          {/* Content input */}
          <textarea
            placeholder="Content"
            value={
              isNewNote || isEditing ? noteContent : selectedNoteData.content
            }
            onChange={(e) => setNoteContent(e.target.value)}
            className={`text-base opacity-80 flex-grow h-full scrollbar-thin bg-transparent text-justify pr-5 overflow-auto outline-none resize-none ${
              isReadOnly ? "bg-gray-100" : ""
            }`}
            readOnly={isReadOnly}
          />
        </div>
      )}
    </div>
  );
};

export default NoteContent;

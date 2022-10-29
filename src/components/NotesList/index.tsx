import { INotes } from "../../App";
import { AddNote } from "../AddNote";
import { Note } from "../Note";

type NotesListProps = {
  notes: INotes[];
  handleAddNote(text: string): void;
  handleDeleteNote(id: number): void;
};
export const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
}: NotesListProps) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

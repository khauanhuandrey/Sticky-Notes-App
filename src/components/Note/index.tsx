import { MdDeleteForever } from "react-icons/md";

type NoteProps = {
  id: number;
  text: string;
  date: string;
  handleDeleteNote(id: number): void;
};

export const Note = ({ id, text, date, handleDeleteNote }: NoteProps) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

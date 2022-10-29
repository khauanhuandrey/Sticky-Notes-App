import { ChangeEvent, useState } from "react";

type AddNoteProps = {
  handleAddNote(text: string): void;
};
export const AddNote = ({ handleAddNote }: AddNoteProps) => {
  const [noteText, setNoteText] = useState<string>("");

  const characterLimit: number = 200;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textData: string = e.target.value;
    {
      characterLimit - textData.length >= 0 && setNoteText(e.target.value);
    }

    console.log(noteText);
  };

  const handleSaveClick = () => {
    noteText.trim() !== "" && handleAddNote(noteText);

    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        value={noteText}
        cols={8}
        rows={10}
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

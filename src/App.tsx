import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { NotesList } from "./components/NotesList";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

export interface INotes {
  id: number;
  text: string;
  date: string;
}

function App() {
  const [notes, setNotes] = useState<INotes[]>([
    {
      id: Math.floor(Math.random() * 1000),
      text: "this is my first note",
      date: "15/04/2021",
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: "this is my second note",
      date: "21/04/2021",
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: "this is my third note",
      date: "10/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const newNote = JSON.parse(localStorage.getItem("newNote") || "{}");
    console.log(notes);

    if (newNote) {
      setNotes(newNote);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("newNote", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id: number) => {
    // notes.filter((note) => {
    //   const newNotes: any = note.id !== id;
    //   setNotes(newNotes);
    // });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        // Aqui estamos passando o arr de obj notes como prop e também estamos efetuando um filtro nele:
        // Faça um filtro no array de obj 'notes' e verifique se a propriedade 'text' possui o valor de searchText.
        //Se possuir, retorne apenas o elemento que possuir essa propriedade com o valor de searchtext.
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
}

export default App;

// 52min

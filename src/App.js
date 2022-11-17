import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { TextWritingBox } from './components/TextWritingBox';
import { NoteSavedBox } from './components/NoteSavedBox';
import Archive from './components/Archive';
import Trash from './components/Trash';
import SideNav from './components/SideNav';
import Reminder from './components/Reminder';
import './app.scss';

import { Route, Switch, useHistory } from 'react-router-dom';


function App() {
  const [notes, setNotes] = useState([])
  const [trashNotes, setTrashNotes] = useState([])
  const [newView, setnewView] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const history = useHistory()

  const addNewNote = (note) => {
    history.push("/");
    localStorage.setItem("keep_notes", JSON.stringify([...notes, note]))
    setNotes([...notes, note]);
  }
  const permanentDelete = (ind) => {
    const newList = trashNotes.filter((_, index) => index !== ind);
    localStorage.setItem("keep_trash_notes", JSON.stringify(newList))
    setTrashNotes(newList);
  }

  const addFromTrash = (ind, note) => {
    localStorage.setItem("keep_notes", JSON.stringify([...notes, note]))
    setNotes([...notes, note]);

    const newList = trashNotes.filter((_, index) => index !== ind);
    localStorage.setItem("keep_trash_notes", JSON.stringify(newList))
    setTrashNotes(newList);

  }
  const deleteNote = (id) => {
    const deletingNote = notes[id];
    localStorage.setItem("keep_trash_notes", JSON.stringify([...trashNotes, deletingNote]))
    setTrashNotes([...trashNotes, deletingNote]);

    const newList = notes.filter((_, index) => index !== id);
    localStorage.setItem("keep_notes", JSON.stringify(newList))
    setNotes(newList);
  }
  const falseValView = () => setnewView(false);
  const trueValView = () => setnewView(true);
  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }
  const handlePinUnpin = (index, isPin) => {
    let newList = [...notes];
    newList[index].isPinned = isPin;
    localStorage.setItem("keep_notes", JSON.stringify(newList))
    setNotes(newList);
  }
  useEffect(() => {
    let allNotes = JSON.parse(localStorage.getItem("keep_notes"));
    let trashes = JSON.parse(localStorage.getItem("keep_trash_notes"));
    if (allNotes != undefined && allNotes)
      setNotes(allNotes)
    if (trashes != undefined && trashes)
      setTrashNotes(trashes)
  }, [])


  return (
    <React.Fragment>
      <Header handleSideBar={handleSideBar} viewFalseValue={falseValView} viewTrueValue={trueValView} />
      <SideNav isSideBarOpen={isSideBarOpen} />
      <div className={`parent_div ${isSideBarOpen && "sidebar_open"}`}>
        <TextWritingBox addNewNote={addNewNote} />
        <Switch>
          <Route exact path="/"
            render={() => <NoteSavedBox notes={notes} deleteItem={deleteNote} handlePinUnpin={handlePinUnpin} view={newView} />} />
          <Route exact path="/reminder" component={Reminder} />
          <Route exact path="/archive" render={Archive} />
          <Route exact path="/trash"
            render={() => <Trash trashNotes={trashNotes} addFromTrash={addFromTrash} permanentDelete={permanentDelete} />} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

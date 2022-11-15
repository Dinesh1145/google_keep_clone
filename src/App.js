import React, { useState } from 'react'
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { TextWritingBox } from './components/TextWritingBox';
import { NoteSavedBox } from './components/NoteSavedBox';
import Archive from './components/Archive';
import Trash from './components/Trash';
import SideNav from './components/SideNav';
import Reminder from './components/Reminder';
import './app.scss';

import { Route, Switch } from 'react-router-dom';



function App() {
  const [newNote, setnewNote] = useState([])
  const [newView, setnewView] = useState(true);

  const addItem = (note) => {
    return setnewNote((prv) => {
      return [...prv, note]
    });
  }
  const deleteItemApp = (id) => {
    const newList = newNote.filter((val, index) => {
      return index !== id;
    })
    setnewNote(newList);
  }
  const falseValView = () => setnewView(false);
  const trueValView = () => setnewView(true);


  return (
    <>
      <Header viewFalseValue={falseValView} viewTrueValue={trueValView} />
      <SideNav />
      <TextWritingBox newEvent={addItem} />
      <Switch>

        <Route exact path="/home" render={() => <NoteSavedBox array={newNote} deleteItemApp={deleteItemApp} newViewProps={newView} />} />
        <Route exact path="/reminder" component={Reminder} />

        <Route exact path="/archive" render={Archive} />
        <Route exact path="/trash" render={Trash} />
      </Switch>

    </>
  );
}

export default App;

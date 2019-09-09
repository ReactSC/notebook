import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NoteProvider from '../store/NoteProvider';

import Header from './Header';
import Footer from './Footer';

import Note from './pages/Note'
import Notes from './pages/Notes';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import About from './pages/About';
import SearchResult from './pages/SearchResult';
import NotFound from './pages/NotFound';


import './app.css';


const App = () => {
  return(
    <NoteProvider>
      <Header />
      <div className="container">
        <Switch>
          <Route path = "/search" component = { SearchResult } />
          <Route path = "/about" component = { About } />
          <Route path = "/add" component = { AddNote } />
          <Route path = "/edit/:id" component = { EditNote } />
          <Route path= "/:id" component = { Note } />
          <Route path = "/" component = { Notes } exact />
          <Route component = { NotFound } />
        </Switch>
      </div>
      <Footer />
    </NoteProvider>
  )
}

export default App
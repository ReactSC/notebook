import React, { Component } from 'react';
import { NoteContext } from './Contexts';


class NoteProvider extends Component {
  state = {
    notes: [
      {id:1, title: "Note 1 Title", description: "Note 1 Description"},
      {id:2, title: "Note 2 Title", description: "Note 2 Description"},
      {id:3, title: "Note 3 Title", description: "Note 3 Description"},
      {id:4, title: "Note 4 Title", description: "Note 4 Description"},
      {id:5, title: "Note 5 Title", description: "Note 5 Description"},
      {id:6, title: "Note 6 Title", description: "Note 6 Description"},
      {id:7, title: "Note 7 Title", description: "Note 7 Description"},
      {id:8, title: "Note 8 Title", description: "Note 8 Description"},
      {id:9, title: "Note 9 Title", description: "Note 9 Description"},
      {id:10, title: "Note 10 Title", description: "Note 10 Description"},
      {id:11, title: "Note 11 Title", description: "Note 11 Description"},
      {id:12, title: "Note 12 Title", description: "Note 12 Description"},
      {id:13, title: "Note 13 Title", description: "Note 13 Description"}
    ]
  }

  addNote = note => {
    this.setState({
      notes:[...this.state.notes, note]
    })
  }

// handle form EditNote Component
  editNote = editedNote => {
    const { id, title, description } = editedNote;
    let newNote = this.state.notes.map(note => {
      if ( id === note.id ) {
        return { id, title, description }
      }
      return note;
    })
    this.setState({
      notes: newNote
    })
  }



  delete = id => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id )
    })
  }

  render() {
    const access = {
      notes: this.state.notes,
      addNote: this.addNote,
      editNote: this.editNote,
      delete: this.delete
    }
    return(
      <NoteContext.Provider value={ access }>
        { this.props.children }
      </NoteContext.Provider>
    )
  }
}

export default NoteProvider
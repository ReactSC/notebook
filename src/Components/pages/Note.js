import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NoteContext } from '../../store/Contexts'

import PageHeader from '../PageHeader'

class Note extends Component {
  static contextType = NoteContext;


  edit = id => {
    this.props.history.push(`/edit/${id}`);
  }


  render() {
    const paramID = Number(this.props.match.params.id)
    const filterd = this.context.notes.filter(note=> note.id === paramID)[0]
    const { title, description } = filterd;

    return (
      <div>
        <PageHeader title= { title } width="100%" />
        <p className="note"> { description } </p>

        <br/>
        <br/>
        <span className="right" >
          <button
            className="btn delete"
            onClick= { () => this.context.delete(paramID) }
          >Delete</button>

          <Link
            to = "/"
            className="btn delete"
          >Cencel</Link>

          <button
            className="btn submit"
            onClick= { () => this.edit(paramID) }
          >Edit</button>
        </span>
        
      </div>
    )
  }
}

export default Note

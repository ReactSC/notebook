import React, { Component } from 'react'
import { NoteContext } from '../../store/Contexts';

import PageHeader from '../PageHeader';

class Notes extends Component {
  static contextType = NoteContext;

  state = {
    search: ''
  }

  searchSubmit = e => {
    e.preventDefault();

    this.props.history.push("/search")
  }

  change = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  note = id => {
    this.props.history.push(`/${id}`)
  }

  edit = id => {
    this.props.history.push(`/edit/${id}`);
  }

  render() {
    const { notes } = this.context;
    
    return (
      <React.Fragment>
        <PageHeader title="All Notes" count= {notes.length} >
          <form onSubmit={ this.searchSubmit } >
            <input 
              type="search"
              className="input search"
              name= "search"
              onChange= { this.change }
              value= { this.state.search }
              placeholder= "Search Notes..."
            />
          </form>
        </PageHeader>

        {notes.length < 1 ? <h2 className="page-err">No more notes are available...</h2>: null}

        {
          notes.map((note, index) => {
            return(
              <div
              className="note-card"
              key={ index }
              onClick= { ()=> this.note(note.id) } >
                <span 
                  className="note-content">
                    <h2>{ note.title }</h2>
                    <p>{ note.description }</p>
                </span>
      
                <span className="action">
                  <button
                    className="btn submit"
                    onClick= { () => this.edit(note.id) }
                  >Edit</button>
                </span>
              </div>
            )
          })
        }
      </React.Fragment>
    )
  }
}
export default Notes

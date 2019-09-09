import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NoteContext } from '../../store/Contexts'

class EditNote extends Component {
  static contextType = NoteContext;

  paramID =  Number(this.props.match.params.id);
  filterd = this.context.notes.filter(note => note.id === this.paramID)[0]

  state = {
    id: this.paramID,
    title: this.filterd.title,
    description: this.filterd.description
  }

  change = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submit = e => {
    e.preventDefault();
    const { id, title, description } = this.state;

    const err = {
      title: 'Please Insert a Title !',
      description: 'Please Insert a Discription !'
    }

    //  Title && Body Error
    if (title === '' && description === ''){
      this.setState({
        errors: {
          title: err.title,
          description: err.description
        }
      });
      return;
    }
    //  Titile Error
    if (title === '') {
      this.setState({
        errors: {
          title: err.title,
          description: ''
        }
      });
      return;
    }
//  Body Error
    if (description === '') {
      this.setState({
        errors: {
          title: '',
          description: err.description
        }
      });
      return;
    }

//  No Error
    if (title !== '' && description !== '') {
      const editedNote = {id, title, description}
      this.context.editNote(editedNote); // hit in NoteProvider

      this.props.history.push('/');
      return;
    }

  }


  render() {
    const { id, title, description } = this.state;
    console.log(this.filterd)
    return (
      <div>
        <h1 className="page-header">Edit Note</h1>


        <form onSubmit= { this.submit } > 

          <input
            className="input input-text"
            name="title"
            value= { title }
            onChange= { this.change }
            placeholder="Enter Note Title"
          />
          <textarea
            className="input input-text"
            name="description"
            value= { description }
            onChange= { this.change }
            placeholder="Please Note Description"
            rows = "3"
          ></textarea>

          <span className="right" >
            <button
              className="btn delete"
              onClick= { () => this.context.delete(id) }
            >Delete</button>

            <Link
              to = "/"
              className="btn delete"
            >Cencel</Link>
            <button
              className="btn submit"
              onClick= { this.submit }
              >Save Note</button>
          </span>

        </form>
      </div>
    )
  }
}

export default EditNote
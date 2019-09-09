import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  NoteContext
} from '../../store/Contexts';

class AddNote extends Component {
  static contextType = NoteContext;

  state = {
    id: this.context.notes.length,
    title: '',
    description: '',
    errors: {}
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault();
    const {
      id,
      title,
      description
    } = this.state;

    const err = {
      title: 'Please Insert a Title !',
      description: 'Please Insert a Discription !'
    }

    //  Title && Body Error
    if (title === '' && description === '') {
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
      const note = {
        id,
        title,
        description
      }
      this.context.addNote(note);

      this.props.history.push('/');
      this.setState({});
      return;
    }

  }


  render() {
    const {
      title,
      description
    } = this.state;
    return ( 
    <div>
      <h1 className = "page-header" > Add Note </h1>
        <form onSubmit = {this.submit} >

          <input className = "input input-text"
          name = "title"
          value = {title}
          onChange = {this.change}
          placeholder = "Enter Note Title" />

          <textarea className = "input input-text"
          name = "description"
          value = {description}
          onChange = {this.change}
          placeholder = "Please Note Description"
          rows = "3" >
          </textarea>

          <span className = "right" >
            <Link to = "/"
            className = "btn delete" >
            Go Back </Link>
            
            <button className = "btn submit"
            onClick = {this.submit} >
            Add Note </button>
            </span>
        </form>
      </div>
    )
  }
}

export default AddNote
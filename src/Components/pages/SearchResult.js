import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../PageHeader';

class SearchResult extends Component {

  result = q => {
    console.log(q)
  }


  render() {
    return (
      <div>
        <PageHeader title="Search" />
        <h2 className="page-err">Content not found!
          <div></div>
          <Link to="/">Go Back</Link>
        </h2>
        
      </div>
    )
  }
}
export default SearchResult
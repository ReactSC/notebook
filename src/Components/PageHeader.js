import React, { Component } from 'react'

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header"
        style={this.props.width ? {"display": "block"}:{"display":"flex"}}>
        <span
          className="title"
          >
            { this.props.title }
            {this.props.count ? <span className="count">{ this.props.count }</span> : null}
        </span>
        <span className="search">
        { this.props.children }
        </span>
      </div>
    )
  }
}
export default PageHeader
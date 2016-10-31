import React, { Component } from 'react';


export default class Event extends Component {
  render() {
    return (
        <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
                <div className="card is-fullwidth">
                    <header className="card-header">
                        <p className="card-header-title">
                            {this.props.title}
                        </p>
                        <a className="card-header-icon">
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {this.props.content}
                            <br></br>
                            <small>{this.props.from} - {this.props.to}</small>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a className="card-footer-item">{this.props.poster}</a>
                        <a className="card-footer-item">Edit</a>
                        <a className="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
        </div>
    )
  }
}
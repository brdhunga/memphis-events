import React, { Component } from 'react';


export default class Event extends Component {
  render() {
    return (
        <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter">
                <div class="card is-fullwidth">
                    <header class="card-header">
                        <p class="card-header-title">
                            {this.props.title}
                        </p>
                        <a class="card-header-icon">
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br></br>
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item">Save</a>
                        <a class="card-footer-item">Edit</a>
                        <a class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
        </div>
    )
  }
}
import React, { Component } from 'react';


export default class Tags extends Component {
  render() {
    return (
        <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter">
                <span class="tag is-dark">Dark</span>
                <span class="tag is-primary">Primary</span>
                <span class="tag is-info">Info</span>
                <span class="tag is-success">Success</span>
                <span class="tag is-warning">Warning</span>
                <span class="tag is-danger">Danger</span>

            </div>
        </div>
    )
  }
}
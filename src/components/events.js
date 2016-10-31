import React, { Component } from 'react';

import Event from './event';


export default class Events extends Component {

  renderEmptyListIfUndefinedEvents(events){
      if (events === undefined){
          return []
      }
      return events
  }

  
  render() {

    return (
            <div>
                {
                    this.renderEmptyListIfUndefinedEvents(this.props.events)             
                    .map(function(event){
                        return <Event {...event} /> 
                    })
                }
            </div>
    )
  }
}
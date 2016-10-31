import React, { Component } from 'react';


export default class Tags extends Component {

  renderEmptyListIfUndefinedTags(tags){
      console.log("the tags............")
      console.log(tags)
      if (tags === undefined){
          return []
      }
      return tags
  }

  
  render() {

    return (
        <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">

                {
                    this.renderEmptyListIfUndefinedTags(this.props.tags)             
                    .map(function(item){
                        return <span className="tag">{item}</span> 
                    })
                }

            </div>
        </div>
    )
  }
}
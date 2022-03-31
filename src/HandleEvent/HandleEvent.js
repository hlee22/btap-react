import React, { Component } from 'react'

export default class HandleEvent extends Component {
  render() {
    return (
      <div>HandleEvent
          <button onClick={ () => { 
              alert ( " hùng đẹp trai ") ;  
           }}>click </button>
      </div>
    )
  }
}

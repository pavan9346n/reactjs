import React, { Component } from 'react'

export default class Components extends Component {
  render() {
    return (
      list=`
       <div className='buttons'>
                    <input type='radio'></input>
                    <label for='meeting' >
                        
                        <FontAwesomeIcon icon={faPenToSquare}  className='icons'/>
                        <FontAwesomeIcon icon={faTrash} className='icons'/>
                        
                    
                    </label>
                    
                </div>
      `
    )
  }
}

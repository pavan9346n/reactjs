import React, { Component } from 'react'

export default class Albums extends Component {
    state={
        albumbs:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data=>this.setState({albumbs:data}))
        .catch(err=>console.log(err)
        )
    }
  render() {
    return (
      <div className='albumbs'>
       {this.state.albumbs.map((album)=><p key={album.id}>USER ID:{album.userId}<br/>
      ID: {album.id}<br/>
      TITLE:{album.title}
       </p>)} 
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Photos extends Component {
    state={
        photos:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data=>this.setState({photos:data}))
        .catch(err=>console.log(err)
        )
    }
  render() {
    return (
      <div className='photos'>
        {this.state.photos.map((photo)=><p key={photo.id}> ALBUMID:{photo.albumId}<br/>
       PHOTO ID: {photo.id}<br/>
       TITLE:{photo.title}<br/>
       URL:{photo.url}<br/>
       <img src={photo.thumbnailUrl}  alt='image'/>
        </p>)}
      </div>
    )
  }
}

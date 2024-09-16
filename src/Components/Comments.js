import React, { Component } from 'react'

export default class Comments extends Component {
    state={
        comments:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data=>this.setState({comments:data}))
        .catch(err=>console.log(err)
        )
    }
  render() {
    return (
      <div className='comments'>
       {this.state.comments.map((comment)=><p> POST ID:{comment.postId}<br/>
       ID:{comment.id}<br/>
       NAME:{comment.name}<br/>
       EMAIL:{comment.email}<br/>
       BODY:{comment.body}
       </p>)} 
      </div>
    )
  }
}


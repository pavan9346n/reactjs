import React, { Component } from 'react'

export default class Posts extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=>this.setState({posts:data}))
        .catch(err=>console.log(err)
        )
    }
  render() {
    return (
      <div className='posts'>
       {this.state.posts.map((post)=><p>USER ID:{post.userId}<br/>
       ID:{post.id}<br/>
       TITLE:{post.title}<br/>
       BODY:{post.body}
       </p>)} 
      </div>
    )
  }
}

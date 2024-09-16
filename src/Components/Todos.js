import React, { Component } from 'react'

export default class Todos extends Component {
    state={
        todos:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data=>this.setState({todos:data}))
        .catch(err=>console.log(err)
        )
    }
  render() {
    return (
      <div className='todos'>
        {this.state.todos.map((todo)=><p key={todo.id}>UserId:{todo.userId}<br/>
            Id:{todo.id}<br/>
           Title: {todo.title}<br/>
            
        </p>)}
      </div>
    )
  }
}

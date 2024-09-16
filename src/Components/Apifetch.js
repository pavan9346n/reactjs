import React, { Component } from 'react'

export default class Apifetch extends Component {
    state={
        users:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>this.setState({users:data}))
        .catch(err=>console.log(err)
        )
    }
  render() {
    return (
      <div className='details'>
       {this.state.users.map((user) =>
       <p key={user.id}>
        USER ID:{user.id}<br/>
       NAME:{user.name} <br/>
       USER NAME{user.username}<br/>
       USER EMAIL{user.email}<br/>
       STREET:{user.address.street}<br/>
       SUITE:{user.address.suite}<br/>
       CITY:{user.address.city}<br/>
       PHONE:{user.phone}
       </p>)} 
       {/* {this.state.users.map((user) =><li key={user.id}>{user.username}</li>)}  */}
      </div>
    )
  }
}




import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{
constructor(props){
    super(props)
    this.state={
        users:[]
    }
}
componentDidMount(){
    UserService.getUsers().then((response)=>{
        this.setState({users: response.data})
    });
}
render(){
    return (
        <div>
         <h1 className="text.center">Users List</h1>
<table className="table table-striped">
<thead>

<tr>
<td>Book Id</td>
<td>Book name</td>
<td>Book author</td>
<td>Book price</td>
</tr>
</thead>
<tbody>
{
    this.state.users.map(
        user=>
        <tr key= {user.bid}>
        <td>{user.bid}</td>
        <td>{user.bname}</td>
        <td>{user.bauthor}</td>
        <td>{user.bprice}</td>
        </tr>

    )
}
</tbody>
</table>

        </div>
    )
}
}
export default UserComponent
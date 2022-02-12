import React, {Component} from 'react';

import EditUserForm from './components/edit-user';


class User extends Component{
   
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
        
        this.fetchUsers = this.fetchUsers.bind(this);
    }    
    
    fetchUsers = function(){       
        fetch('api/user')
        .then(res => res.json())
        .then(data => {
            this.setState({ users : data });
            console.log( this.state.users );
        });
    }

    componentDidMount(){
        this.fetchUsers(); //No es la mejor manera de hacerlo ya que consume muchos recursos
    }    

    render(){
        return (                        
            <div className="container-fluid mg-y">  
                <a href="/">Volver</a>             
                <EditUserForm fetchUsers={this.fetchUsers} users={this.state.users}/> 
            </div>            
        )
    }
}

export default User;
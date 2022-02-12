import React from 'react';

import OneUser from './one-user';

class EditUserForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id: '',
            username: '',
            usermail: ''
            //error: '',
            //success: false
        }

        this.userSend = function(e){   
            if( this.state.id ){
                this.ajaX('put');
            }else{
                this.ajaX('post');
            }

            e.preventDefault();
        }.bind(this);  

        this.handleChange = function(e){
            let { name, value } = e.target;

            this.setState({
                [name]: value
            });
        }.bind(this);     
    }

    ajaX(_method){
        let uri = '/api/user/';    
        let msg = 'Usuario creado';

        if( _method == 'put' ){
            uri +=  this.state.id;
            msg = 'Usuario Actualizado';
        }

        fetch(uri,{
            method: _method,
            body: JSON.stringify( this.state ),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            }

        }).then(
            res => res.json()
        ).then(
            data => {
                if( data.error ){
                    this.setState({error: data.msg });
                    M.toast({ html: data.msg , classes: 'error'});
                }else{
                    this.setState({
                        id: '',
                        username: '',
                        usermail: ''
                    });
                    this.props.fetchUsers();
                    M.toast({ html: 'Usuario actualizado' , classes: 'success'});
                    console.log( data );
                }
            }
        ).catch(
            err => console.log( err )
        );
    }

    render(){
        return (
        <div className="row midle-xs"> 
            <div className="col-xs-12 col-md-3">
                <div className='form-area'>       
                    <form onSubmit={this.userSend}>    
                        <h3>Agregar</h3>
                        <div className="group">                                    
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Nombre'/>                                   
                        </div>   

                        <div className="group">
                            <input type="email" name="usermail" value={this.state.usermail} onChange={this.handleChange} placeholder='Mail'/>
                        </div>    
                        
                        <input type="submit" className="btn" value="Agregar"/>
                    </form>
                </div>                
            </div>   
            <div className="col-xs-12 col-md-9">           
                    <h3>Usuarios Registrados</h3>    
                    <div className="users-list">
                    {
                        this.props.users.map( user => <OneUser 
                                key={user._id}
                                id={user._id} 
                                fetchUsers = {this.props.fetchUsers}
                                username={user.name}
                                usermail={user.mail} 
                                date_create={user.date_create} 
                            /> )
                    }                    
                    </div>
                </div>
        </div>
        )
    }
}

export default EditUserForm;
import React from 'react';

class OnePost extends React.Component{
    constructor(props){
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
    }    

    deleteUser(e){
        if( confirm('Esta seguro de querer eliminar este usuario, se eliminarán todos sus posts') ){
            fetch(`api/user/${this.props.id}`,{
                method: 'DELETE',
                //body: JSON.stringify( this.key ),
                headers: {
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                }
            }).then(
                res => res.json()
            ).then(
                data => {
                    if( data.error ){
                        //this.setState({error: data.msg });
                    }else{                   
                        M.toast({ html: 'Usuario Eliminado', classes : 'success' });
                        this.props.fetchUsers();                    
                    }
                }
            ).catch(
                err => console.log( err )
            );
        }
        
        e.preventDefault();
    }

    render(){
        let date = new Date(this.props.date_create);
        
        return(                        
            <div className="user-item">
                <div className="head-item">                    
                    <div className="item-id">{this.props.id}</div>
                    <div className="item-date-create">{date.toDateString()}</div>
                </div>
                <div className="item-info"><span>Nombre: </span>{this.props.username}</div> 
                <div className="item-info"><span>Mail: </span>{this.props.usermail}</div>                               
                <div className="actions">
                    
                    <form method="post" onSubmit={this.deleteUser} >
                        <input type="submit" className="btn canvas delete-me sm " value="eliminar"/>
                    </form>
                </div> 
            </div>            
        )
    };
}

export default OnePost;

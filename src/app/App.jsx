import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            usermail: '',
            error: ''
        }
        
        this.userSend = function(e){
            if( !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test( this.state.usermail ) || !this.state.username ){
                this.setState( {error : 'Los datos ingresados no son válidos' } );
                e.preventDefault();
            }
            
        }.bind(this);  

        this.handleChange = function(e){
            let { name, value } = e.target;

            this.setState({
                [name]: value
            });
        }.bind(this);             
    }    

    render(){
        return (            
            <div className="container-fluid mg-y">
                <div className="row center-xs midle-xs">
                    {/* Creación de usuarios Area */}
                    <div className="col-xs-12 col-md-3">
                        <div className='form-area'>       
                            <form onSubmit={this.userSend} method="post" action='api/user'>    
                                <h3>Crear Usuario</h3>
                                <div className="group">                                    
                                    <input type="text" name="username" onChange={this.handleChange} placeholder='Nombre'/>                                   
                                </div>   

                                <div className="group">
                                    <input type="mail" name="usermail" onChange={this.handleChange} placeholder='Mail'/>
                                </div>  
                               
                                <input type="submit" className="btn" value="Crear Usuario"/>

                                <div className="group links">
                                    <a href="" title="Ver Usuarios">Ver Usuarios</a>
                                </div>     

                                <div className="alert success">
                                    Success!
                                </div> 
                                <div id="error-alert" className={"alert error " + (this.state.error ? 'show' : '')} >
                                    {this.state.error}
                                </div>                          
                            </form>
                        </div>                
                    </div>   

                    {/* Gestionar Usuarios Area*/}
                    {/*
                    <div className="col-xs-12 col-md-9">
                        <div className="alert success">
                            Success!
                        </div> 
                        <div className="alert error">
                            Error!
                        </div> 
                        <h3>Lista de usuarios</h3>
                        <div className="users-list">
                            {
                            <div className="user-item">
                                <div className="head-item">
                                    <div className="item-id">_648113215449</div>
                                    <div className="item-date-create">31/12/2022</div>
                                </div>
                                <div className="item-info"><span>Nombre:</span> Jeidy Esposito </div>
                                <div className="item-info"><span>Mail: </span> jeidy@youtouch.cl</div>
                                <div className="actions">
                                    <form method="post" action="">
                                        <input type="submit" class="btn canvas modify-me sm" value="modificar"/>
                                    </form>
                                    <form method="post" action="">
                                        <input type="submit" class="btn canvas delete-me sm " value="eliminar"/>
                                    </form>
                                </div>                                
                            </div>
                            }
                        </div>
                    </div>
                        */}
                </div>                
            </div>            
        )
    }
}

export default App;
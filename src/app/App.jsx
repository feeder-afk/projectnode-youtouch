import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.uri = "adf";

        this.userSend = this.formSend.bind(this);
    }

    formSend(e){
        e.preventDefault();
    }

    render(){
        return (            
            <div className="container-fluid mg-y">
                <div className="row midle-xs">
                    {/* Creación de usuarios Area */}
                    <div className="col-xs-12 col-md-3">
                        <div className='form-area'>       
                            <form onSubmit={this.formSend} method="post" action={this.uri}>    
                                <h3>Crear Usuario</h3>
                                <div className="group">                                    
                                    <input type="text" name="user-name" placeholder='Nombre'/>                                   
                                </div>   

                                <div className="group">
                                    <input type="mail" name="user-mail" placeholder='Mail'/>
                                </div>  
                               
                                <input type="submit" className="btn" value="Crear Usuario"/>
                              
                            </form>
                        </div>                
                    </div>   

                    {/* Gestionar Usuarios Area*/}
                    <div className="col-xs-12 col-md-9">
                        <div className="alert success">
                            Success!
                        </div> 
                        <div className="alert error">
                            Error!
                        </div> 
                        <h3>Lista de usuarios</h3>
                        <div className="users-list">
                            {/*
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
                            */}
                        </div>
                    </div>
                </div>                
            </div>            
        )
    }
}

export default App;
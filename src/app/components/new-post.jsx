import React from 'react';

class NewPostForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            usermail: '',
            userpost: '',
            error: '',
            success: false
        }
        
        this.userSend = function(e){           
            fetch('/api/user',{
                method: 'post',
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
                    }else{
                        this.setState({
                            error: '',
                            success: true,
                            username: '',
                            usermail: ''
                        });
                    }
                }
            ).catch(
                err => console.log( err )
            );

            e.preventDefault();
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
            <div className="col-xs-12 col-md-3">
                <div className='form-area'>       
                    <form onSubmit={this.userSend} method="post" action='api/user'>    
                        <h3>Realizar Posteo</h3>
                        <div className="group">                                    
                            <input type="text" name="username" onChange={this.handleChange} placeholder='Nombre'/>                                   
                        </div>   

                        <div className="group">
                            <input type="mail" name="usermail" onChange={this.handleChange} placeholder='Mail'/>
                        </div>  

                        <div className="group">
                            <textarea name="userpost" onChange={this.handleChange} placeholder="Contenido del post"/>
                        </div>  
                        
                        <input type="submit" className="btn" value="Crear Usuario"/>

                        <div className={"alert success " + ( this.state.success ? 'show': '' )}>
                            El usuario se ha creado
                        </div> 

                        <div id="error-alert" className={"alert error " + (this.state.error ? 'show' : '')} >
                            {this.state.error}
                        </div>                          
                    </form>
                </div>                
            </div>   
        )
    }
}

export default NewPostForm;
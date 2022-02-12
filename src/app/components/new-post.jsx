import React from 'react';

class NewPostForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            usermail: '',
            userpost: '',
            //error: '',
            //success: false
        }
        
        this.userSend = function(e){           
            fetch('/api/post',{
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
                        M.toast({ html: data.msg , classes: 'error'});
                    }else{
                        this.setState({
                            //error: '',
                            //success: true,
                            username: '',
                            userpost: '',
                            usermail: ''
                        });
                        this.props.fetchPosts();
                        M.toast({ html: 'Post Creado' , classes: 'success'});
                        console.log( data );
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
                    <form onSubmit={this.userSend}>    
                        <h3>Realizar Posteo</h3>
                        <div className="group">                                    
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Nombre'/>                                   
                        </div>   

                        <div className="group">
                            <input type="email" name="usermail" value={this.state.usermail} onChange={this.handleChange} placeholder='Mail'/>
                        </div>  

                        <div className="group">
                            <textarea name="userpost" value={this.state.userpost} onChange={this.handleChange} placeholder="Contenido del post"/>
                        </div>  
                        
                        <input type="submit" className="btn" value="Enviar Post"/>
                    </form>
                </div>                
            </div>   
        )
    }
}

export default NewPostForm;
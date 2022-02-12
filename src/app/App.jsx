import React, {Component} from 'react';
import NewPostForm from './components/new-post';
import AllPost from './components/view-posts';


class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            posts: []
        }       

        this.fetchPosts = this.fetchPosts.bind(this);
        //this.
    }    
    
    fetchPosts = function(){
        fetch('api/post')
        .then(res => res.json())
        .then(data => {
            this.setState({ posts : data });
            console.log( this.state.posts );
        });
    }

    componentDidMount(){
        this.fetchPosts(); //No es la mejor manera de hacerlo ya que consume muchos recursos
    }
    
    

    render(){
        return (            
            <div className="container-fluid mg-y">
                <div className="row midle-xs">
                    {/* Creación de usuarios Area */}
                    <NewPostForm fetchPosts={this.fetchPosts}/> 

                    {/* Gestionar Usuarios Area*/}
                    <AllPost posts={this.state.posts}/>
                </div>                
            </div>            
        )
    }
}

export default App;
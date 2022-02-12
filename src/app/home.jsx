import React, {Component} from 'react';

import NewPostForm from './components/new-post';
import AllPost from './components/view-posts';

class Home extends Component{
   
    constructor(props){
        super(props);
        
        this.state = {
            posts: []
        }       
        , {Component}
        this.fetchPosts = this.fetchPosts.bind(this);
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
                <a href="/users">Gestionar Usuarios</a>
                <div className="row midle-xs">                 
                    <NewPostForm fetchPosts={this.fetchPosts}/>                    
                    <AllPost fetchPosts={this.fetchPosts} posts={this.state.posts}/>
                </div>                
            </div>            
        )
    }
}

export default Home;
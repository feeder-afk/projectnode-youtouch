import React from 'react';
import OnePost from './one-post';

class AllPost extends React.Component{
    constructor(props){
        super(props); 
    }

    render(){
        return(
            <div className="col-xs-12 col-md-9"> 
                <h3>Posteos Realizados</h3>              
                <div className="users-list">
                   {
                       this.props.posts.map( post => <OnePost 
                            key={post._id}
                            id={post._id} 
                            fetchPosts = {this.props.fetchPosts}
                            author={post.user.name}
                            mail={post.user.mail} 
                            date_create={post.date_create} 
                            content={post.content} /> ) 
                   }                    
                </div>
            </div>
        )
    };
}

export default AllPost;

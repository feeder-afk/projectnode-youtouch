import React from 'react';
import OnePost from './one-post';

class AllPost extends React.Component{
    constructor(props){
        super(props);

        
    }

    render(){
        return(
            <div className="col-xs-12 col-md-9">
                <div className="users-list">
                   {
                       this.props.posts.map( post => <OnePost 
                            key={post._id} 
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

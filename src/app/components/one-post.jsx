import React from 'react';

class OnePost extends React.Component{
    constructor(props){
        super(props);

        this.deletePost = this.deletePost.bind(this);
    }


    deletePost(e){
        fetch(`/api/post/${this.props.id}`,{
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
                    this.props.fetchPosts();                    
                }
            }
        ).catch(
            err => console.log( err )
        );
        e.preventDefault();
    }

    render(){
        let date = new Date(this.props.date_create);
        
        return(
            <div className="user-item">
                <div className="head-item">
                    <div className="item-id">{this.props.author} ({this.props.mail})</div>
                    <div className="item-date-create">{date.toDateString()}</div>
                </div>
                <div className="item-info">{this.props.content}</div>                
                <div className="actions">
                    <form method="post" onSubmit={this.deletePost} >
                        <input type="submit" className="btn canvas delete-me sm " value="eliminar"/>
                    </form>
                </div>                                
            </div>
        )
    };
}

export default OnePost;
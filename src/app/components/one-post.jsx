import React from 'react';

class OnePost extends React.Component{
    constructor(props){
        super(props);

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
                    <form method="post" action="">
                        <input type="submit" className="btn canvas delete-me sm " value="eliminar"/>
                    </form>
                </div>                                
            </div>
        )
    };
}

export default OnePost;
import React, { Component } from 'react'

import '../style/comment.css'

class Comments extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    handleChangeComment(event){
        this.setState({comment: event.target.value});
    }

    handleAddComment (event){
        event.preventDefault();
        if (this.state.comment){
            let newComment = {
                id_project: this.props.id_project,
                time: new Date().getTime(),
                comment: this.state.comment
            };
            let newComments = this.state.comments.slice();
            newComments.unshift(newComment);
            localStorage.setItem('comments', JSON.stringify(newComments));
            this.setState({comment: '', comments: newComments});
        } else {
            alert('Input a comment');
        }
    }

    componentDidMount() {
        let localComments = JSON.parse(localStorage.getItem('comments'));
        if (localComments){
            let comments = localComments.filter(com => com.id_project === this.props.id_project);
            this.setState({comments});
        }
    }


    render() {
        return(
            <div className='comment'>
                <h4>Comments:</h4>
                <form className='form_comment'>
                    <textarea placeholder="input a comment" className='form_comment_textarea' value={this.state.comment} onChange={this.handleChangeComment.bind(this)} />
                    <button className='form_comment_button' onClick={this.handleAddComment.bind(this)}>Add comment</button>
                </form>
                <div>
                    <h4>All comments:</h4>
                    {this.state.comments && this.state.comments.map((comment, id) => (
                        <div className='text_comment' key={id}>
                            {new Date(comment.time).toLocaleDateString()}: {comment.comment}
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default Comments
/**
 * Created by patrykmazurkiewicz on 17/05/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ''
        });
    };

    render() {
        return (
            <form
                className="comment-box"
                onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange}/>
                <button action="submit">boom</button>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);
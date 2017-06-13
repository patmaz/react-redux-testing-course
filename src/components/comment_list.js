/**
 * Created by patrykmazurkiewicz on 30/05/2017.
 */
import React from 'react';
import { connect } from 'react-redux';

const CommentList  = (props) => {
    const list = props.comments.map((comment, index) => <li key={index}>{comment}</li>);
    return (
        <div className="comment-list">
            <ul>
                {list}
            </ul>
        </div>
    )
};

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
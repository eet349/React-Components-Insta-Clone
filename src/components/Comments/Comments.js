import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = (props) => {
	// 🔥 Make sure the parent of Comments is passing the right props!
	const { comments } = props;

	const renderComments = () => {
		const mappedComments = comments.map((comment) => {
			return <Comment key={comment.id} comment={comment} />;
		});
		return mappedComments;
	};

	return (
		<div>
			{/* map through the comments prop and render a Comment for every piece of data */}
			{renderComments()}
		</div>
	);
};

export default Comments;

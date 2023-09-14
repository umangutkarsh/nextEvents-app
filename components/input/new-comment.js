import React, { useRef, useState } from 'react';
import classes from './new-comment.module.css';

function NewComment(props) {
	const [isInvalid, setIsInvalid] = useState(false);

	// const emailInputRef = useRef();
	// const nameInputRef = useRef();
	// const commentInputRef = useRef();

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [comment, setComment] = useState('');
	const [post, setPost] = useState(false);

	function sendCommentHandler(event) {
		event.preventDefault();

		// const enteredEmail = emailInputRef.current.value;
		// const enteredName = nameInputRef.current.value;
		// const enteredComment = commentInputRef.current.value;

		if (
			!email ||
			email.trim() === '' ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!comment ||
			comment.trim() === ''
		) {
			setIsInvalid(true);
			return;
		}

		props.onAddComment({
			email: email,
			name: name,
			text: comment,
		});

		setEmail('');
		setName('');
		setComment('');
		setPost(true);
	}

	return (
		<React.Fragment>
			{post && (
				<p className='center' style={{ marginTop: '2rem' }}>
					Comment Added
				</p>
			)}
			<form className={classes.form} onSubmit={sendCommentHandler}>
				<div className={classes.row}>
					<div className={classes.control}>
						<label htmlFor='email'>Your email</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={event => setEmail(event.target.value)}
							// ref={emailInputRef}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your name</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={event => setName(event.target.value)}
							// ref={nameInputRef}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='comment'>Your comment</label>
					<textarea
						id='comment'
						rows='5'
						value={comment}
						onChange={event => setComment(event.target.value)}
						// ref={commentInputRef}
					></textarea>
				</div>
				{isInvalid && <p>Please enter a valid email address and comment!</p>}
				<button>Submit</button>
			</form>
		</React.Fragment>
	);
}

export default NewComment;

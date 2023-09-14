import React, { useRef, useState } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
	// const emailInputRef = useRef();
	const [email, setEmail] = useState('');
	const [signed, setSigned] = useState('');

	function registrationHandler(event) {
		event.preventDefault();

		// fetch user input (state or refs)
		// optional: validate input
		// send valid data to API

		// let enteredEmail = emailInputRef.current.value;

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: email }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => console.log(data));

		setEmail('');
		setSigned('Signed Up!');
	}

	return (
		<React.Fragment>
			{signed && (
				<p className='center' style={{ marginTop: '2rem' }}>
					{signed}
				</p>
			)}
			<section className={classes.newsletter}>
				<h2>Sign up to stay updated!</h2>
				<form onSubmit={registrationHandler}>
					<div className={classes.control}>
						<input
							type='email'
							id='email'
							placeholder='Your email'
							aria-label='Your email'
							// ref={emailInputRef}
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<button onClick={registrationHandler}>Register</button>
					</div>
				</form>
			</section>
		</React.Fragment>
	);
}

export default NewsletterRegistration;

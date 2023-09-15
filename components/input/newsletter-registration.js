import React, { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
	const emailInputRef = useRef();
	const notificationCtx = useContext(NotificationContext);

	function registrationHandler(event) {
		event.preventDefault();

		// fetch user input (state or refs)
		// optional: validate input
		// send valid data to API

		let enteredEmail = emailInputRef.current.value;

		notificationCtx.showNotification({
			title: 'Pending...',
			message: 'Registering for newsletter',
			status: 'pending',
		});

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: enteredEmail }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}

				return response.json().then(data => {
					throw new Error(data.message || 'Something went wrong');
				});
			})
			.then(data => {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Registered for newsletter successfully',
					status: 'success',
				});
			})
			.catch(error => {
				notificationCtx.showNotification({
					title: 'Error!',
					message: error.message || 'Something went wrong',
					status: 'error',
				});
			});
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type='email'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
						ref={emailInputRef}
					/>
					<button onClick={registrationHandler}>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;

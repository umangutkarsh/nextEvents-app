function handler(req, res) {
	const eventId = req.query.eventId;

	if (req.method === 'POST') {
		const { email, name, text } = req.body;

		if (
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!text ||
			text.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid inputs' });
			return;
		}

		const newComment = {
			id: new Date().toISOString(),
			email: email,
			name: name,
			text: text,
		};

		console.log(newComment);
		res.status(201).json({ message: 'Added comment', comment: newComment });
	}

	if (req.method === 'GET') {
		const dummyComments = [
			{ id: 'c1', name: 'Jon Snow', text: 'i am the king in the north' },
			{ id: 'c2', name: 'Khaleesi', text: 'i am the mother of dragons' },
			{ id: 'c1', name: 'Severus Snape', text: 'i am the half blood prince' },
		];

		console.log(dummyComments);
		res.status(200).json({ comments: dummyComments });
	}
}

export default handler;

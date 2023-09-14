import { MongoClient } from 'mongodb';

async function handler(req, res) {
	const eventId = req.query.eventId;

	const client = await MongoClient.connect(
		'mongodb+srv://umangutkarsh_:32mvsNzFuokQ@next-events.ivlvtvx.mongodb.net/events?retryWrites=true&w=majority'
	);

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
			email: email,
			name: name,
			text: text,
			eventId,
		};

		const db = client.db();

		const result = await db.collection('comments').insertOne(newComment);
		console.log(result);
		newComment.id = result.insertedId;

		res.status(201).json({ message: 'Added comment', comment: newComment });
	}

	if (req.method === 'GET') {
		const dummyComments = [
			{ id: 'c1', name: 'Jon Snow', text: 'i am the king in the north' },
			{ id: 'c2', name: 'Khaleesi', text: 'i am the mother of dragons' },
			{ id: 'c3', name: 'Severus Snape', text: 'i am the half blood prince' },
		];

		console.log(dummyComments);
		res.status(200).json({ comments: dummyComments });
	}

	client.close();
}

export default handler;

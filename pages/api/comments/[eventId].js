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
		const db = client.db();

		const allComments = await db
			.collection('comments')
			.find()
			.sort({ _id: -1 })
			.toArray();

		console.log(allComments);
		res.status(200).json({ comments: allComments });
	}

	client.close();
}

export default handler;

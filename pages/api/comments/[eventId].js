import {
	connectDatabase,
	getDocuments,
	insertDocument,
} from '../../../helpers/db-util';

async function handler(req, res) {
	const eventId = req.query.eventId;

	let client;
	try {
		client = await connectDatabase();
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Connecting to the database failed' });
	}

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
			client.close();
			return;
		}

		const newComment = {
			email: email,
			name: name,
			text: text,
			eventId,
		};

		let result;
		try {
			result = await insertDocument(client, 'comments', newComment);
			newComment._id = result.insertedId;
			res.status(201).json({ message: 'Added comment', comment: newComment });
		} catch (error) {
			res.status(500).json({ message: 'Document insertion failed' });
		}
	}

	if (req.method === 'GET') {
		let allComments;
		try {
			allComments = await getDocuments(client, 'comments', { _id: -1 });
			console.log(allComments);
			res.status(200).json({ comments: allComments });
		} catch (error) {
			res.status(500).json({ message: 'Could not fetch documents' });
		}
	}
}

export default handler;

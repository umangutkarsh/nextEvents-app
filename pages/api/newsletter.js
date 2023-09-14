import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
	if (req.method === 'POST') {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address' });
			return;
		}

		let client;
		try {
			client = await connectDatabase();
		} catch (error) {
			return res
				.status(500)
				.json({ message: 'Connecting to the database failed' });
		}

		try {
			await insertDocument(client, 'newsletter', { email: userEmail });
			client.close();
		} catch (error) {
			return res.status(500).json({ message: 'Document insertion failed' });
		}

		res.status(201).json({ message: 'Signed up' });
	}
}

export default handler;

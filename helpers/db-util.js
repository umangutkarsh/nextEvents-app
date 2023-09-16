import { MongoClient } from 'mongodb';

export async function connectDatabase() {
	return await MongoClient.connect(
		`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ivlvtvx.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
	);
}

export async function insertDocument(client, collection, document) {
	const db = client.db();

	return await db.collection(collection).insertOne(document);
}

export async function getDocuments(client, collection, sort) {
	const db = client.db();

	return await db.collection(collection).find().sort(sort).toArray();
}

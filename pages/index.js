import Head from 'next/head';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';
import { getFeaturedEvents as dummyFeaturedEvents } from '../dummy-data';

function HomePage(props) {
	const featuredEvents = dummyFeaturedEvents();

	return (
		<div>
			<Head>
				<title>Next Events</title>
				<meta
					name='description'
					content='Find a lot of great events that allow you to  evolve.'
				/>
			</Head>
			<EventList items={props.events} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800,
	};
}

export default HomePage;

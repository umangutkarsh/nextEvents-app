import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

function EventsPage(props) {
	const router = useRouter();
	const { events } = props;

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<React.Fragment>
			<Head>
				<title>All Events</title>
				<meta
					name='description'
					content='Find a lot of great events that allow you to  evolve.'
				/>
			</Head>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</React.Fragment>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 60,
	};
}

export default EventsPage;

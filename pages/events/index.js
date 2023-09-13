import React from 'react';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../helpers/api-util';
import { useRouter } from 'next/router';

function EventsPage(props) {
	const router = useRouter();
	const { events } = props;

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<React.Fragment>
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

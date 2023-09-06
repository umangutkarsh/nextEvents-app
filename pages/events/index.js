import React from 'react';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

function EventsPage() {
	const router = useRouter();
	const allEvents = getAllEvents();

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<React.Fragment>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={allEvents} />
		</React.Fragment>
	);
}

export default EventsPage;

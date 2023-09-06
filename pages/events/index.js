import React from 'react';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../dummy-data';

function EventsPage() {
	const allEvents = getAllEvents();

	return (
		<React.Fragment>
			<EventSearch />
			<EventList items={allEvents} />
		</React.Fragment>
	);
}

export default EventsPage;

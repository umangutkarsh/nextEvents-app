import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import React from 'react';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return <p className='center'>Loading</p>;
	}

	const year = Number(filterData[0]);
	const month = Number(filterData[1]);

	if (
		isNaN(year) ||
		isNaN(month) ||
		(year < 2021 && year > 2030) ||
		(month < 1 && month > 12)
	) {
		return (
			<React.Fragment>
				<ErrorAlert>
					<p>Invalid URL. Please adjust values</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</React.Fragment>
		);
	}

	const filteredEvents = getFilteredEvents({
		year,
		month,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<React.Fragment>
				<ErrorAlert>
					<p>No Events Found</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</React.Fragment>
		);
	}
	console.log(filteredEvents);

	const date = new Date(year, month - 1);

	return (
		<React.Fragment>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</React.Fragment>
	);
}

export default FilteredEventsPage;

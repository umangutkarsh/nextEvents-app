import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage(props) {
	const [loadedEvents, setLoadedEvents] = useState();
	const router = useRouter();

	const filterData = router.query.slug;

	const { data, error } = useSWR(
		'https://nextjs-course-ad71e-default-rtdb.firebaseio.com/events.json'
	);

	useEffect(() => {
		if (data) {
			const events = [];

			for (const key in data) {
				events.push({
					id: key,
					...data[key],
				});
			}
			setLoadedEvents(events);
		}
	}, [data]);

	if (!loadedEvents) {
		return <p className='center'>Loading</p>;
	}

	const year = Number(filterData[0]);
	const month = Number(filterData[1]);

	if (
		isNaN(year) ||
		isNaN(month) ||
		(year < 2021 && year > 2030) ||
		(month < 1 && month > 12) ||
		error
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

	const filteredEvents = loadedEvents.filter(event => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
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
			<Head>
				<title>Filtered Events</title>
				<meta name='description' content={`All events for ${month}/${year}`} />
			</Head>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</React.Fragment>
	);
}

// export async function getServerSideProps(context) {
// 	const { params } = context;

// 	const filterData = params.slug;

// 	const year = Number(filterData[0]);
// 	const month = Number(filterData[1]);

// 	if (
// 		isNaN(year) ||
// 		isNaN(month) ||
// 		(year < 2021 && year > 2030) ||
// 		(month < 1 && month > 12)
// 	) {
// 		return {
// 			props: { hasError: true },
// 			// notFound: true,
// 			// redirect: {
// 			// 	destination: '/error',
// 			// },
// 		};
// 	}

// 	const filteredEvents = await getFilteredEvents({
// 		year,
// 		month,
// 	});

// 	return {
// 		props: {
// 			events: filteredEvents,
// 		},
// 		date: {
// 			year: year,
// 			month: month,
// 		},
// 	};
// }

export default FilteredEventsPage;

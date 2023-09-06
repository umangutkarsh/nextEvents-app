import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';

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
		return <p>Invalid URL. Please adjust values</p>;
	}

	const filteredEvents = getFilteredEvents({
		year,
		month,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return <p>No Events Found</p>;
	}

	return (
		<div>
			<h1>Filtered Page</h1>
		</div>
	);
}

export default FilteredEventsPage;

import EventItem from './event-item';

function EventList({ items }) {
	return (
		<ul>
			{items.map(item => (
				<EventItem />
			))}
		</ul>
	);
}

export default EventList;

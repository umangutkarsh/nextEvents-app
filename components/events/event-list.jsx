import EventItem from './event-item';

function EventList({ items }) {
	return (
		<ul>
			{items.map(item => (
				<EventItem
					key={item.id}
					id={item.id}
					title={item.title}
					image={item.image}
					date={item.date}
					location={item.location}
				/>
			))}
		</ul>
	);
}

export default EventList;

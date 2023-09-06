import Link from 'next/link';

function EventItem({ title, image, date, location, id }) {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = location.replace(', ', '\n');

	return (
		<li>
			<img src={'/' + image} alt={title} />
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{formattedDate}</time>
					</div>
					<div>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div>
					<Link href={`/events/${id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;

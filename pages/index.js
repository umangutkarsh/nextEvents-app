import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';
import { getFeaturedEvents as dummyFeaturedEvents } from '../dummy-data';

function HomePage(props) {
	const featuredEvents = dummyFeaturedEvents();

	return (
		<div>
			<EventList items={props.events} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
	};
}

export default HomePage;

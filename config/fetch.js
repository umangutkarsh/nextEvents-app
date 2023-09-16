export async function fetchApi() {
	return fetch(
		`https://nextjs-course-ad71e-default-rtdb.firebaseio.com/events.json`
	);
}

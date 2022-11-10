export default async function showMe() {
	try {
		const res = await fetch("/api/users/showme");
		const json = await res.json();
		return json;
	} catch (error) {
		return {ok: false, message: error.message}
	}
}
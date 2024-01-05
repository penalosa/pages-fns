export async function onRequest(context) {
	return new Response(`Tous les ${context.env.DINOS} sont allés à la fête 🎉`);
}

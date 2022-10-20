export async function onRequest(context) {
	const { request }  = context;
  console.log(`[LOGGING FROM /hello]: Request came from ${request.url}`);

	return new Response("Bonjour dinosaure 🌤!");
}

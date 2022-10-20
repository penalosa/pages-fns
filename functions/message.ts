export async function onRequestPost(context) {
  try {
    let data = await context.request.json();
    return new Response(`Received by /message: ${data.message}`, {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  } catch (err) {
    return new Response('Error parsing JSON content', { status: 400 });
  }
}
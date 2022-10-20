const sendMessageBtn = document.querySelector('.btn-send-message');
const sendEmojiBtn = document.querySelector('.btn-send-emoji');

sendMessageBtn?.addEventListener('click', async () => {
  const response = await fetch('/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: 'Tous les dinosaures viennent à la fête!'})
  });

  alert(await response.text());
});

sendEmojiBtn?.addEventListener('click', async () => {
  const response = await fetch('/api/emoji', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({emoji: '🦕'})
  });

  alert(await response.text());
})
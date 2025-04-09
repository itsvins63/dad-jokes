document.getElementById('get-joke').addEventListener('click', async () => {
    const jokeText = document.getElementById('joke-text');
    jokeText.textContent = 'Loading...';

    try {
        const response = await fetch('/joke');
        const data = await response.json();
        jokeText.textContent = data.joke;
    } catch (error) {
        jokeText.textContent = 'Failed to fetch joke. Please try again!';
    }
});
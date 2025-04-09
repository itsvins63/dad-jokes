document.getElementById('get-joke').addEventListener('click', async () => {
    const jokeText = document.getElementById('joke-text');
    const jokeEmoji = document.querySelector('.joke-emoji');
    const button = document.getElementById('get-joke');
    
    // Disable button and add loading state
    button.disabled = true;
    jokeText.textContent = 'Loading...';
    
    // Add loading animation to emoji
    jokeEmoji.style.animation = 'none';
    jokeEmoji.classList.remove('fa-grin-squint-tears');
    jokeEmoji.classList.add('fa-spinner', 'fa-spin');

    try {
        const response = await fetch('/joke');
        const data = await response.json();
        
        // Reset emoji and show joke with fade effect
        jokeEmoji.style.animation = '';
        jokeEmoji.classList.remove('fa-spinner', 'fa-spin');
        jokeEmoji.classList.add('fa-grin-squint-tears');
        
        // Fade out old joke
        jokeText.style.opacity = '0';
        
        setTimeout(() => {
            jokeText.textContent = data.joke;
            jokeText.style.opacity = '1';
        }, 200);
    } catch (error) {
        jokeText.textContent = 'Failed to fetch joke. Please try again!';
        jokeEmoji.classList.remove('fa-spinner', 'fa-spin');
        jokeEmoji.classList.add('fa-sad-tear');
    } finally {
        button.disabled = false;
    }
});
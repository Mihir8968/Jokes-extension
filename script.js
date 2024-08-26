document.addEventListener("DOMContentLoaded", function() {
    const jokeElement = document.getElementById('jokeElement');

    fetch('https://icanhazdadjoke.com/slack')
        .then(response => response.json())
        .then(data => {
            const jokeText = data.attachments[0].text;
            jokeElement.innerText = jokeText;
        })
        .catch(error => {
            jokeElement.innerText = "Failed to fetch joke. Please try again.";
            console.error('Error fetching joke:', error);
        });
});

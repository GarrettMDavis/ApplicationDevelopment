'use strict';
(() => {
    const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

    const jokeSetup = document.querySelector('h2');
    const jokeDelivery = document.querySelector('p');
    const jokeButton = document.querySelector('button');

    const handleAPI = (data) => {
        jokeSetup.innerHTML = data.setup;
        jokeDelivery.innerHTML = data.delivery;
        console.log(data.setup, data.delivery);
    };
    
    const fetchJoke = () => {
        fetch(url)
            .then(response => response.json())
            .then(json => handleAPI(json))
            .catch(error => {
                console.error('Error fetching joke:', error);
                jokeSetup.textContent = 'Oops!';
                jokeDelivery.textContent = 'Could not load a joke.';
            });
    };

    fetchJoke();
    jokeButton.addEventListener('click', fetchJoke);
})();

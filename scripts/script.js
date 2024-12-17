const toggleButton = document.getElementById('theme-toggle');
toggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const projects = [
    {
        title: "Guessing Game (Python)",
        description: "A number guessing game with difficulty levels and engaging text art to welcome players.",
        link: "https://onlinegdb.com/pnHnYod1k",
        image: "./assets/Guess Game Art.jpg"
    },
    {
        title: "Blackjack (Python)",
        description: "A text-based Blackjack game where players compete against the dealer, enhanced with stylish text art for the interface.",
        link: "https://onlinegdb.com/VFvgxM93o",
        image: "./assets/BlackJack Art.jpg"
    },
    {
        title: "Caesar Cipher (Python)",
        description: "A fun tool to encrypt and decrypt messages using the Caesar cipher technique, featuring decorative text art.",
        link: "https://onlinegdb.com/JPk8rywHL",
        image: "./assets/Caesar Cipher Art.jpg"
    },
    {
        title: "Hangman (Python)",
        description: "A text-based Hangman game with ASCII art to depict the progress of the game visually.",
        link: "https://onlinegdb.com/5GtQLUC0H",
        image: "./assets/Hangman Art.jpg"
    },
    {
        title: "Rock Paper Scissors (Python)",
        description: "A simple implementation of the classic game where players compete against the computer, enhanced with creative text art.",
        link: "https://onlinegdb.com/J4F1HI9BL",
        image: "./assets/Rock Paper Scissors.jpg"
    },
    {
        title: "Treasure Island (Python)",
        description: "An interactive adventure game with decisions that lead to different outcomes, featuring immersive text art.",
        link: "https://onlinegdb.com/0t4dzNcPz",
        image: "./assets/Treasure Island Art.jpg"
    }
];

const projectsList = document.getElementById('projects-list');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');

    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <img src="${project.image}" alt="${project.title} Word Art">
        <a href="${project.link}" target="_blank" class="view-code-button">View Code</a>
    `;

    projectsList.appendChild(projectCard);
});


document.querySelector('form')?.addEventListener('submit', function (e) {
    const name = document.querySelector('#name')?.value.trim();
    const email = document.querySelector('#email')?.value.trim();
    const message = document.querySelector('#message')?.value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        e.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

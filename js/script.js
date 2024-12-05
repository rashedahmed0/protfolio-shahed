// Toggle menu function
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// JavaScript code to change text and apply typing effect
const texts = ["I am a FullStack Developer", "I am a Backend Developer", "I am a .Net Developer"];
let textIndex = 0; // To switch between texts
const typingText = document.getElementById("typingText");

function typeText(text) {
    typingText.textContent = ""; // Clear previous text
    let i = 0;
    const interval = setInterval(() => {
        typingText.textContent += text.charAt(i);
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(() => {
                // Wait for a second before changing the text
                textIndex = (textIndex + 1) % texts.length;
                typeText(texts[textIndex]);
            }, 1000);
        }
    }, 150); // Adjust the speed of typing here (milliseconds)
}

// Start typing with the first text
typeText(texts[textIndex]);
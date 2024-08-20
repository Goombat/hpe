// Function to simulate typewriter effect
function typeWriter(textElement, text, delay, callback) {
    let i = 0;
    let textLength = text.length;

    function typeChar() {
        if (i < textLength) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeChar, delay);
        } else if (callback) {
            callback();
        }
    }
    typeChar();
}

// Function to fade out the entire body
function fadeOutBody(callback) {
    const body = document.body;
    let opacity = 1;

    function decreaseOpacity() {
        opacity -= 0.05;
        if (opacity <= 0) {
            body.style.opacity = 0;
            callback(); // Execute callback after fade out
        } else {
            body.style.opacity = opacity;
            requestAnimationFrame(decreaseOpacity);
        }
    }
    decreaseOpacity();
}

// Display the title with typewriter effect
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const bodyText = document.getElementById("body-text");
    const button = document.getElementById("choice-button");

    const titleText = title.textContent;
    const bodyTextContent = bodyText.textContent;

    title.textContent = '';
    bodyText.textContent = '';

    setTimeout(() => {
        title.style.opacity = 1;
        typeWriter(title, titleText, 100, () => {
            setTimeout(() => {
                bodyText.style.opacity = 1;
                typeWriter(bodyText, bodyTextContent, 50, () => {
                    // Show the button after text animation completes
                    button.classList.add('show');
                });
            }, 500);
        });
    }, 500);
});
//Handle button hover effect
document.getElementById("choice-button").addEventListener("mouseenter", () => {
    document.getElementById("choice-button").classList.add("hover");
}
);

document.getElementById("choice-button").addEventListener("mouseleave", () => {
    document.getElementById("choice-button").classList.remove("hover");
}
);



// Handle button click with fade out effect
document.getElementById("choice-button").addEventListener("mousedown", () => {
    
});

    

document.getElementById("choice-button").addEventListener("mouseup", () => {
    fadeOutBody(() => {
        document.getElementById("choice-button").classList.add("active");
        window.location.href = 'scene.html';
    });
});

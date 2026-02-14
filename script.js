const container = document.querySelector('.hearts-container');

function createHeart() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Posiciones aleatorias para formar la copa del árbol
        heart.style.left = Math.random() * 200 + 'px';
        heart.style.top = Math.random() * 150 + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(heart);
    }
}

window.onload = createHeart;

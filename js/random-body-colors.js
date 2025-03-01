function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function handleThemeButtonClick() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    localStorage.setItem('themeColor', randomColor);
}

function applyStoredTheme() {
    const storedColor = localStorage.getItem('themeColor');
    if (storedColor) {
        document.body.style.backgroundColor = storedColor;
    }
}

const themeButton = document.getElementById('theme-btn');
if (themeButton) {
    themeButton.addEventListener('click', handleThemeButtonClick);
}

applyStoredTheme();
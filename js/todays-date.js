function getFormattedDate() {
    const date = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName},<br><span class="font-bold">${month} ${day} ${year}</span>`;
}

function setTodaysDate() {
    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.innerHTML = getFormattedDate();
    }
}

setTodaysDate();
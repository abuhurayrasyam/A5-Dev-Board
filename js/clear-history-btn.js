function handleClearHistoryClick() {
    const notificationContainer = document.getElementById('notification');
    if (notificationContainer) {
        notificationContainer.innerHTML = '';
        console.log("Notification history cleared.");
    }
}

const clearHistoryButton = document.getElementById('clear-history');
if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', handleClearHistoryClick);
}
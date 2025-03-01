function handleCompletedButtonClick(event) {
    alert("Board updated successfully");

    const taskAssignedElement = document.getElementById('task-assigned');
    if (taskAssignedElement) {
        let taskAssignedCount = parseInt(taskAssignedElement.textContent);
        if (taskAssignedCount > 0) {
            taskAssignedCount -= 1;
            taskAssignedElement.textContent = taskAssignedCount;
        }
    }

    const taskCompletedElement = document.getElementById('task-completed');
    if (taskCompletedElement) {
        let taskCompletedCount = parseInt(taskCompletedElement.textContent);
        taskCompletedCount += 1;
        taskCompletedElement.textContent = taskCompletedCount;
    }

    event.target.disabled = true;
    event.target.textContent = "Completed";
    event.target.classList.remove('bg-[#3752FD]');
    event.target.classList.add('bg-gray-400', 'cursor-not-allowed');

    const notificationContainer = document.getElementById('notification');
    if (notificationContainer) {
        const taskCard = event.target.closest('[id^="card-"]');
        if (taskCard) {
            const taskName = taskCard.querySelector('h1').textContent;
            const currentTime = new Date().toLocaleTimeString();

            const newNotification = document.createElement('p');
            newNotification.className = 'bg-[#F4F7FF] rounded-lg p-3 text-[#000000BF] mt-3';
            newNotification.textContent = `You have completed the task ${taskName} at ${currentTime}`;

            notificationContainer.appendChild(newNotification);

            console.log("Notification added:", newNotification.textContent);
        } else {
            console.error("Task card not found!");
        }
    } else {
        console.error("Notification container not found!");
    }

    if (taskAssignedElement && parseInt(taskAssignedElement.textContent) === 0) {
        alert("Congrates!!! You have completed all current tasks");
    }
}

const completedButtons = document.querySelectorAll('.completed-btn');
if (completedButtons) {
    completedButtons.forEach(button => {
        button.addEventListener('click', handleCompletedButtonClick);
    });
}
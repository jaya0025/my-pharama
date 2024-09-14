document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const medication = document.getElementById('medication').value;
    const time = document.getElementById('time').value;
    const restockDays = document.getElementById('restock').value;

    const now = new Date();
    const intakeTime = new Date();
    intakeTime.setHours(time.split(":")[0]);
    intakeTime.setMinutes(time.split(":")[1]);

    // Medicine intake reminder
    if (intakeTime > now) {
        const timeDiff = intakeTime.getTime() - now.getTime();
        setTimeout(() => {
            alert(`It's time to take your medicine: ${medication}`);
        }, timeDiff);
    } else {
        alert('Please set a future time for your medicine intake.');
    }

    // Restock reminder
    const restockReminder = new Date(now);
    restockReminder.setDate(now.getDate() + parseInt(restockDays));

    const restockMessage = `You need to restock your medicine "${medication}" in ${restockDays} day(s)`;
    const reminderMsg = document.getElementById('reminder-msg');
    reminderMsg.textContent = restockMessage;
    
    setTimeout(() => {
        alert(`Reminder: Time to restock your medicine "${medication}"!`);
    }, restockDays * 24 * 60 * 60 * 1000); // Reminder in days
});

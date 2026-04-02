document.getElementById('myButton').addEventListener('click', function() {
    alert('Hello');
});

document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        if (!card) return;
        const title = card.querySelector('.card-title');
        if (title) {
            alert(title.textContent.trim());
        }
    });
});
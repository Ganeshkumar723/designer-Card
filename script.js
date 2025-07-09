window.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.productsBox');
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
    }, 300);
});

window.addEventListener('DOMContentLoaded', () => {
    const monthEl = document.querySelector('.cardDate .month');
    const dayEl = document.querySelector('.cardDate .day');
    const weekdayEl = document.querySelector('.cardDate .weekday');

    const today = new Date();

    const months = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    const weekdays = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];

    monthEl.textContent = months[today.getMonth()];
    dayEl.textContent = today.getDate().toString().padStart(2, '0');
    weekdayEl.textContent = weekdays[today.getDay()];
});

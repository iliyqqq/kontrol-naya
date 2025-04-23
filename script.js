document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-interests');
    const interestCards = document.querySelectorAll('.interest-card');
    
    interestCards.forEach(card => {
        card.classList.add('hidden');
    });
    
    toggleButton.addEventListener('click', function() {
        interestCards.forEach(card => {
            card.classList.toggle('hidden');
        });
        
        if (toggleButton.textContent === 'Показать интересы') {
            toggleButton.textContent = 'Скрыть интересы';
        } else {
            toggleButton.textContent = 'Показать интересы';
        }
    });
});

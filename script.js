document.addEventListener('DOMContentLoaded', function() {
    const logoForm = document.getElementById('logoForm');
    const generatedLogoDiv = document.getElementById('generatedLogo');
    const downloadLogoButton = document.getElementById('downloadLogo');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');
    const resetFormButton = document.getElementById('resetForm');
    const clearFeedbackButton = document.getElementById('clearFeedback');
    const starRating = document.getElementById('starRating');
    const ratingInput = document.getElementById('rating');

    let selectedRating = 0;

    const logos = [
        'logo1.png',
        'logo2.png',
        'logo3.png',
        'logo4.png',
        'logo5.png',
        'logo6.png',
        'logo7.png',
        'logo8.png'
    ];

    let currentLogo = '';

    logoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const randomLogo = logos[Math.floor(Math.random() * logos.length)];
        generatedLogoDiv.innerHTML = `<img src="${randomLogo}" alt="Generated Logo" id="generatedLogoImage">`;
        downloadLogoButton.style.display = 'block';
    });

    downloadLogoButton.addEventListener('click', function() {
        const logoImage = document.getElementById('generatedLogoImage');
        const link = document.createElement('a');
        link.href = logoImage.src;
        link.download = 'logo.png';
        link.click();
    });

    starRating.addEventListener('click', function(event) {
        const selectedStar = event.target;
        if (selectedStar.classList.contains('star')) {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => star.classList.remove('selected'));
            selectedStar.classList.add('selected');
            ratingInput.value = selectedStar.getAttribute('data-value');
        }
    });

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const comments = document.getElementById('comments').value;
        const rating = ratingInput.value;
        if (comments && rating) {
            const feedbackItem = document.createElement('li');
            feedbackItem.textContent = `Rating: ${rating}, Comments: ${comments}`;
            feedbackList.appendChild(feedbackItem);
            feedbackForm.reset();
            ratingInput.value = '0';
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => star.classList.remove('selected'));
        }
    });

    resetFormButton.addEventListener('click', function() {
        logoForm.reset();
        generatedLogoDiv.innerHTML = '';
        downloadLogoButton.style.display = 'none';
    });

    clearFeedbackButton.addEventListener('click', function() {
        feedbackList.innerHTML = '';
    });
});
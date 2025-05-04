document.querySelector('.php-email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const loading = form.querySelector('.loading');
    const errorMessage = form.querySelector('.error-message');
    const sentMessage = form.querySelector('.sent-message');
    
    loading.style.display = 'block';
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'none';
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        loading.style.display = 'none';
        if (response.ok) {
            sentMessage.style.display = 'block';
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        loading.style.display = 'none';
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'There was a problem sending your message. Please try again.';
    });
});
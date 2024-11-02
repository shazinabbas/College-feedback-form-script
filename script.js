const radioButtons = document.querySelectorAll('input[type="radio"].answers');

// Filter and click all "Strongly agree" options
radioButtons.forEach(radio => {
    // Check if the parent TD contains "Strongly agree" text
    if (radio.parentElement.textContent.trim().toLowerCase() === 'strongly agree') {
        radio.checked = true;
        
        // Trigger change event to ensure form validation works
        const event = new Event('change', {
            bubbles: true,
            cancelable: true,
        });
        radio.dispatchEvent(event);
    }
});

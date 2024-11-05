const radioButtons = document.querySelectorAll('input[type="radio"].answers');
const textareas = document.querySelectorAll('textarea.clsanswertextarea');

radioButtons.forEach(radio => {
    if (radio.parentElement.textContent.trim().toLowerCase() === 'strongly agree') {
        radio.checked = true;
        
        const event = new Event('change', {
            bubbles: true,
            cancelable: true,
        });
        radio.dispatchEvent(event);
    }
});

textareas.forEach(textarea => {
    textarea.value = '..........';
});

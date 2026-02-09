document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    console.log('JS pieslēgts un darbojas');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // handle form submission logic here
        console.log('Form submitted');
    });
});
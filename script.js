// event handlers for various events

// Click event handler
document.getElementById('myElement').addEventListener('click', function() {
    console.log('Element clicked!');
});

// Input event handler
document.getElementById('myInput').addEventListener('input', function() {
    console.log('Input changed: ', this.value);
});

// Mouseover event handler
document.getElementById('myElement').addEventListener('mouseover', function() {
    console.log('Mouse over element!');
});

// Mouseout event handler
document.getElementById('myElement').addEventListener('mouseout', function() {
    console.log('Mouse left the element!');
});

// Focus event handler
document.getElementById('myInput').addEventListener('focus', function() {
    console.log('Input focused!');
});

// Blur event handler
document.getElementById('myInput').addEventListener('blur', function() {
    console.log('Input blurred!');
});

// Change event handler
document.getElementById('mySelect').addEventListener('change', function() {
    console.log('Select changed: ', this.value);
});
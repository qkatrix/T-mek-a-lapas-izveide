function calculateSum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Both arguments must be numbers.';
    }
    return num1 + num2;
}

function rateContent(rating) {
    if (rating < 1 || rating > 5) {
        return 'Please provide a rating between 1 and 5.';
    }
    return `You rated this content a ${rating}.`;
}

function analyzeText(text) {
    if (typeof text !== 'string') {
        return 'Input must be a string.';
    }
    const wordCount = text.split(' ').length;
    return `The text contains ${wordCount} words.`;
}

function generateProfile(name, age) {
    if (typeof name !== 'string' || typeof age !== 'number') {
        return 'Invalid input. Ensure name is a string and age is a number.';
    }
    return `Profile: ${name}, Age: ${age}`;
}

function validatePassword(password) {
    if (password.length < 6) {
        return 'Password must be at least 6 characters long.';
    }
    return 'Password is valid.';
}
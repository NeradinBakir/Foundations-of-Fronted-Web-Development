$(document).ready(function() {
    $('#registration-form').validate({
        rules: {
            'first-name': {
                required: true
            },
            'last-name': {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            'first-name': {
                required: 'Please enter your first name.'
            },
            'last-name': {
                required: 'Please enter your last name.'
            },
            email: {
                required: 'Please enter your email address.',
                email: 'Please enter a valid email address.'
            },
            password: {
                required: 'Please enter a password.',
                minlength: 'Password must be at least 8 characters long.'
            }
        }
    });
});

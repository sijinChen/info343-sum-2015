"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('RnWBp8vjduOUIufq0Q6dr0EJPD0rHXcBFppe0RhW', '7ox0RI53hujYSCi74iv1LHBxm8gUva7kpbc8FSNl');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}

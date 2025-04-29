document.addEventListener("contextmenu", function(event) {
    event.preventDefault();

    // Create a small popup to indicate right-click is blocked
    let blockedMessage = document.createElement('div');
    blockedMessage.style.position = 'absolute';
    blockedMessage.style.left = event.pageX + 'px';
    blockedMessage.style.top = event.pageY + 'px';
    blockedMessage.style.backgroundColor = '#f44322'; // Red color for blocked message
    blockedMessage.style.color = '#fff'; // White text color
    blockedMessage.style.padding = '10px';
    blockedMessage.style.borderRadius = '5px';
    blockedMessage.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    blockedMessage.style.zIndex = '1000';
    blockedMessage.style.fontSize = '14px';
    blockedMessage.style.fontFamily = 'Arial, sans-serif';
    blockedMessage.innerHTML = 'Prawy Przycisk myszy Zablokowany!';

    // Append the message to the body
    document.body.appendChild(blockedMessage);

    // Remove the message after 2 seconds
    setTimeout(function() {
        blockedMessage.remove();
    }, 2000);
});

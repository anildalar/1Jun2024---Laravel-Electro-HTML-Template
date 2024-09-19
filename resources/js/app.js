import './bootstrap';


alert('THis is global JS');

document.getElementById('send-button').addEventListener('click', function() {
    let message = document.getElementById('message-input').value;

    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: JSON.stringify({ message: message })
    });

    document.getElementById('message-input').value = '';
});

window.Echo.channel('chat')
    .listen('.message.sent', function(data) {
        let messageElement = document.createElement('li');
        messageElement.textContent = data.message;
        document.getElementById('messages').appendChild(messageElement);
    });


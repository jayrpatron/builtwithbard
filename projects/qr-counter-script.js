document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const generateButton = document.getElementById('generate-button');
    const qrcode = new QRCode(document.getElementById('qrcode'));
    let qrCodeCount = 0;

    // Check if the count is stored in localStorage and retrieve it
    if (localStorage.getItem('qrCodeCount')) {
        qrCodeCount = parseInt(localStorage.getItem('qrCodeCount'));
        updateQrCodeCount(); // Update the displayed count
    }

    generateButton.addEventListener('click', function () {
        const inputValue = textInput.value;
        if (inputValue) {
            qrcode.makeCode(inputValue);
            qrCodeCount++;
            updateQrCodeCount();
            // Store the updated count in localStorage
            localStorage.setItem('qrCodeCount', qrCodeCount.toString());
        }
    });

    function updateQrCodeCount() {
        const qrCodeCountElement = document.getElementById('qr-code-count');
        qrCodeCountElement.textContent = `QR Codes Generated: ${qrCodeCount}`;
    }
});

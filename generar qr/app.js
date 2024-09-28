function generateQR() {
    const text = document.getElementById('text-input').value;
    const qrcodeDiv = document.getElementById('qrcode');
    const qrArea = document.getElementById('qr-area');
    const downloadBtn = document.getElementById('download-btn');
    
    if (text) {
        qrcodeDiv.innerHTML = '';
        new QRCode(qrcodeDiv, {
            text: text,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff"
        });
        qrArea.style.display = 'flex';
        downloadBtn.style.display = 'block';
    } else {
        alert('Por favor, ingrese texto o URL.');
    }
}

function clearInput() {
    document.getElementById('text-input').value = '';
    document.getElementById('qrcode').innerHTML = '';
    document.getElementById('qr-area').style.display = 'none';
}

function downloadQR() {
    const img = document.querySelector("#qrcode img");
    if (img) {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = img.src;
        link.click();
    }
}

document.getElementById('current-year').textContent = new Date().getFullYear();
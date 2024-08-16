document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);

    const name = params.get('name');
    const guardianName = params.get('guardianName');
    const parentPhone = params.get('parentPhone');
    const contactOption = params.get('contactOption');
    const contactDetail = params.get('contactDetail');

    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerHTML = `
        <h2>User Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Guardian/Parent's Name:</strong> ${guardianName}</p>
        <p><strong>Parent's Phone:</strong> ${parentPhone}</p>
        <p><strong>Contact Option:</strong> ${contactOption}</p>
        <p><strong>Contact Detail:</strong> ${contactDetail}</p>
    `;

    // Generate QR Code with URL containing the user's details
    const qrCodeDiv = document.getElementById('qrcode');
    const qrUrl = window.location.href; // Current page URL with query params

    new QRCode(qrCodeDiv, {
        text: qrUrl,
        width: 200,
        height: 200
    });

    // Download QR Code as PDF
    document.getElementById('downloadPdf').addEventListener('click', function() {

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();


        pdf.text('Owner Details', 10, 10);


        const qrCanvas = qrCodeDiv.querySelector('canvas');
        if (qrCanvas) {
            const imgData = qrCanvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 10, 20, 180, 180);
        }

        pdf.save(`${name}_QR_Code.pdf`);
    });
});
